import React, {useEffect, useState} from 'react';
import HeaderModal from '../../home/HeaderModal';
import FormIngresarIntervencion from './FormIngresarIntervencion';
import {View} from 'react-native';
import styles from '../../css/ingresarcss';
import TextInputForm from '../../commons/TextInputForm';
import Button from '../../Button';
import {notifyMessage} from '../../../core/general';
import buscarDatos from '../../../helpers/buscarDatos';
import tsconfig from '../../../tsconfig.json';
import combosArbol from '../../../helpers/combosArbol';
import base64 from 'react-native-base64';
import guardarDatos from '../../../helpers/guardarDatos';

const ModalIngresarArbol = ({label, setOption, back}) => {
  const [arboles, setArboles] = useState(false);
  const [idArbol, setIdArbol] = useState(null);
  const [dataArbol, setDataArbol] = useState({codigo_arbol: ''});
  const [combos, setCombos] = React.useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let url = tsconfig[tsconfig.use].searchIntervencion.combos;
    let data = await combosArbol(url);
    setCombos(data);
  }, [setCombos]);

  const fnGuardar = async (data, secondData, images = []) => {
    if (idArbol !== null) {
      if (
        !data.fecha ||
        !data.tipo_intervencion ||
        !data.proyecto ||
        !secondData.intervencion_secundaria
      ) {
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

  const fnSearch = async () => {
    if (dataArbol.codigo_arbol === '') {
      notifyMessage('Debe ingresar un codigo arbol');
    } else {
      //let datos = dataArbol.codigo_arbol.split(',');
      let result = await buscarDatos(dataArbol, 1, 'searchTree');
      if (result.data?.length === 0) {
        notifyMessage('Arbol no encontrado');
      } else {
        if (result.error) {
          notifyMessage(result.message);
        } else {
          notifyMessage('Arbol encontrado correctamente');
          setIdArbol(result.data[0].id_arbol);
          setArboles(true);
        }
      }
    }
  };

  return (
    <>
      <HeaderModal type={label} setOption={setOption} backIndex={back} />
      {arboles ? (
        <FormIngresarIntervencion fnGuardar={fnGuardar} combos={combos} />
      ) : (
        <View style={styles.body}>
          <View style={styles.form}>
            <TextInputForm
              label={'Código árbol'}
              placeholder={'Código árbol'}
              value={dataArbol.codigo_arbol}
              keyboardType="default"
              autoCorrect={false}
              autoComplete={false}
              onChangeTextInput={text =>
                setDataArbol({codigo_arbol: text.trimStart()})
              }
            />
            <View
              style={{
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'flex-end',
                width: '50%',
                top: '3%',
              }}>
              <Button mode="contained" onPress={() => fnSearch()}>
                Buscar
              </Button>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default ModalIngresarArbol;
