import React, {useEffect, useState} from 'react';
import HeaderModal from '../../home/HeaderModal';
import FormIngresarIntervencion from './FormIngresarIntervencion';
import {View} from 'react-native';
import styles from '../../css/ingresarcss';
import TextInputForm from '../../commons/TextInputForm';
import {campoObligatory, notifyMessage} from '../../../core/general';
import buscarDatos from '../../../helpers/buscarDatos';
import tsconfig from '../../../tsconfig.json';
import combosArbol from '../../../helpers/combosArbol';
import base64 from 'react-native-base64';
import guardarDatos from '../../../helpers/guardarDatos';
import {theme} from '../../../core/theme';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';
import ButtonInsert from '../../ButtonInsert';
import {getData} from '../../../combos';

const ModalIngresarArbol = ({
  label,
  setOption,
  back,
  setIndexSnap,
  snp,
  setLoadApp,
}) => {
  const [arboles, setArboles] = useState(false);
  const [idArbol, setIdArbol] = useState(null);
  const [dataArbol, setDataArbol] = useState({});
  const [combos, setCombos] = React.useState([]);
  const [zonaVerde, setZonaVerde] = useState(false);

  useEffect(() => {
    async function initial() {
      setLoadApp(true);
      let res = await getData('intervencionArbol');
      setCombos(res);
      setIndexSnap(snp.length - 2);
      setLoadApp(false);
    }
    initial().then();
  }, []);

  const fnGuardar = async (data, secondData, images = []) => {
    if (idArbol !== null) {
      if (data.fecha === '' || !data.fecha) {
        campoObligatory('Fecha intervención');
      } else if (data.tipo_intervencion === '' || !data.tipo_intervencion) {
        campoObligatory('Tipo intervención');
      } else if (data.proyecto === '' || !data.proyecto) {
        campoObligatory('Proyecto');
      } else if (!zonaVerde ? !data.observacion : false) {
        campoObligatory('Observación');
      } else if (
        !secondData.intervencion_secundaria ||
        secondData.intervencion_secundaria.length === 0
      ) {
        campoObligatory('Intervención secundaria');
      } else {
        setLoadApp(true);
        let formData = new FormData();
        data.fecha = data.fecha.split('/').reverse().join('-');
        formData.append(
          zonaVerde ? 'idZona' : 'idArbol',
          base64.encode(idArbol),
        );
        formData.append(
          'datosIntervencion',
          base64.encode(JSON.stringify(data)),
        );
        formData.append('datosImagenes', base64.encode(JSON.stringify(images)));
        formData.append(
          'datosSecundarias',
          base64.encode(JSON.stringify(secondData.intervencion_secundaria)),
        );

        let res = await guardarDatos(
          formData,
          zonaVerde ? 'intervencionZonaVerde' : 'searchIntervencion',
        );
        if (res.message) {
          notifyMessage(res.message);
          setIdArbol(null);
          setArboles(false);
          setLoadApp(false);
        } else {
          notifyMessage('Error al guardar');
          setLoadApp(false);
        }
      }
    } else {
      notifyMessage(
        'Sin ' + zonaVerde ? 'zona verde' : 'arbol' + ' para asociar',
      );
      setLoadApp(false);
    }
  };

  const fnSearch = async () => {
    if (!dataArbol.codigo_arbol && !dataArbol.codigo) {
      notifyMessage('Debe ingresar uno de los codigo');
      return;
    }
    let url = 'searchTree';
    if (dataArbol.codigo_arbol) {
      if (dataArbol.codigo_arbol === '') {
        notifyMessage('Debe ingresar un código árbol');
        return;
      }
    }
    if (dataArbol.codigo) {
      if (dataArbol.codigo === '') {
        notifyMessage('Debe ingresar un código zona verde');
        return;
      }
      url = 'searchZone';
      setZonaVerde(true);
      let combo = tsconfig[tsconfig.use].intervencionZonaVerde.combos;
      let data = await combosArbol(combo);
      setCombos(data);
    }
    setLoadApp(true);
    let result = await buscarDatos(dataArbol, 1, url);
    setLoadApp(false);
    if (result.data?.length === 0) {
      notifyMessage('No encontrado');
    } else {
      if (result.error) {
        notifyMessage(result.message);
      } else {
        setIndexSnap(snp.length - 1);
        notifyMessage('Encontrado correctamente');
        setIdArbol(
          result.data[0].id_arbol
            ? result.data[0].id_arbol
            : result.data[0].id_zona,
        );
        setArboles(true);
      }
    }
  };

  return (
    <>
      <HeaderModal type={label} setOption={setOption} backIndex={back} />
      {arboles ? (
        <FormIngresarIntervencion
          fnGuardar={fnGuardar}
          combos={combos}
          dataArbol={dataArbol}
          zonaVerde={zonaVerde}
        />
      ) : (
        <View style={styles.body}>
          <View style={styles.form}>
            <TextInputForm
              label={'Código árbol'}
              placeholder={'Código árbol'}
              value={dataArbol.codigo_arbol}
              keyboardType="default"
              editable={!dataArbol.codigo}
              autoCorrect={false}
              autoComplete={false}
              onChangeTextInput={text => {
                delete dataArbol.codigo;
                setDataArbol({codigo_arbol: text.trimStart()});
              }}
            />
            <TextInputForm
              label={'Código zona verde'}
              placeholder={'Código árbol'}
              value={dataArbol.codigo}
              keyboardType="default"
              autoCorrect={false}
              autoComplete={false}
              editable={!dataArbol.codigo_arbol}
              onChangeTextInput={text => {
                delete dataArbol.codigo_arbol;
                setDataArbol({codigo: text.trimStart()});
              }}
            />
          </View>
          <View style={[styles.form, {justifyContent: 'flex-end'}]}>
            <ButtonInsert
              compact={true}
              mode="contained"
              style={styles.guardar}
              labelStyle={{fontSize: responsiveScreenFontSize(theme.fontbtn)}}
              color={theme.colors.primary}
              onPress={() => fnSearch()}>
              Buscar
            </ButtonInsert>
          </View>
        </View>
      )}
    </>
  );
};

export default ModalIngresarArbol;
