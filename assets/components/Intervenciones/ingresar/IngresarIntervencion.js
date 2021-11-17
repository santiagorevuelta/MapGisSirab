import React, {useEffect, useState} from 'react';
import HeaderModal from '../../home/HeaderModal';
import FormIngresarIntervencion from './FormIngresarIntervencion';
import {View} from 'react-native';
import styles from '../../css/ingresarcss';
import TextInputForm from '../../commons/TextInputForm';
import {notifyMessage} from '../../../core/general';
import buscarDatos from '../../../helpers/buscarDatos';
import tsconfig from '../../../tsconfig.json';
import combosArbol from '../../../helpers/combosArbol';
import base64 from 'react-native-base64';
import guardarDatos from '../../../helpers/guardarDatos';
import {Button as ButtonIcon} from 'react-native-paper';
import {theme} from '../../../core/theme';

const ModalIngresarArbol = ({label, setOption, back}) => {
  const [arboles, setArboles] = useState(false);
  const [idArbol, setIdArbol] = useState(null);
  const [dataArbol, setDataArbol] = useState({});
  const [combos, setCombos] = React.useState([]);
  const [zonaVerde, setZonaVerde] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let url = tsconfig[tsconfig.use].searchIntervencion.combos;
    let data = await combosArbol(url);
    setCombos(data);
  }, [setCombos]);

  const fnGuardar = async (data, secondData, images = []) => {
    if (idArbol !== null) {
      let valid = validatorObligatory(data, secondData);
      if (!valid) {
        notifyMessage('Los campos marcados con (*) son obligatorios');
        return;
      }

      let formData = new FormData();
      data.fecha = data.fecha.split('/').reverse().join('-');
      secondData = secondData.intervencion_secundaria.split(',');
      formData.append('idArbol', base64.encode(idArbol));
      formData.append('datosIntervencion', base64.encode(JSON.stringify(data)));
      formData.append('datosImagenes', base64.encode(JSON.stringify(images)));
      formData.append(
        'datosSecundarias',
        base64.encode(JSON.stringify(secondData)),
      );
      let res = await guardarDatos(formData, 'searchIntervencion');
      if (res.message) {
        notifyMessage(res.message);
        setIdArbol(null);
        setArboles(false);
      } else {
        notifyMessage('Error al guardar');
      }
    } else {
      notifyMessage('Sin arbol para asociar');
    }
  };

  const fnGuardarZonaVerde = async (data, secondData, images = []) => {
    if (idArbol !== null) {
      let valid = validatorObligatory(data, secondData);
      if (!valid) {
        notifyMessage('Los campos marcados con (*) son obligatorios');
        return;
      }

      let formData = new FormData();
      data.fecha = data.fecha.split('/').reverse().join('-');
      secondData = secondData.intervencion_secundaria.split(',');
      formData.append('idArbol', base64.encode(idArbol));
      formData.append('datosIntervencion', base64.encode(JSON.stringify(data)));
      formData.append('datosImagenes', base64.encode(JSON.stringify(images)));
      formData.append(
        'datosSecundarias',
        base64.encode(JSON.stringify(secondData)),
      );
      let res = await guardarDatos(formData, 'searchIntervencion');
      if (res.message) {
        notifyMessage(res.message);
        setIdArbol(null);
        setArboles(false);
      } else {
        notifyMessage('Error al guardar');
      }
    } else {
      notifyMessage('Sin arbol para asociar');
    }
  };

  function validatorObligatory(data, secondData) {
    return !(
      !data.fecha ||
      !data.tipo_intervencion ||
      !data.proyecto ||
      !data.observacion ||
      !secondData.intervencion_secundaria
    );
  }

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
    }
    let result = await buscarDatos(dataArbol, 1, url);
    if (result.data?.length === 0) {
      notifyMessage('No encontrado');
    } else {
      if (result.error) {
        notifyMessage(result.message);
      } else {
        notifyMessage('Encontrado correctamente');
        console.log(result.data);
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
          fnGuardar={!zonaVerde ? fnGuardar : fnGuardarZonaVerde}
          combos={combos}
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
            <ButtonIcon
              compact={true}
              mode="contained"
              style={styles.guardar}
              icon="content-save"
              color={theme.colors.primary}
              onPress={() => fnSearch()}>
              Buscar
            </ButtonIcon>
          </View>
        </View>
      )}
    </>
  );
};

export default ModalIngresarArbol;
