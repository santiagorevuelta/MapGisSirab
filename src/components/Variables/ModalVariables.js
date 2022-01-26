import React from 'react';
import {Modal, View} from 'react-native';
import {styles} from './modalStyle';
import {Button} from 'react-native-paper';
import {theme} from '../../core/theme';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import FormVariables from '../Arbol/ingresar/tab/FormVariables';
import {consultar} from '../../helpers/dataSave';
import {notifyMessage} from '../../core/general';
import base64 from 'react-native-base64';
import guardarDatos from '../../helpers/guardarDatos';

const ModalVariables = ({
  modalVisible = false,
  onModalVisible,
  setLoadApp,
  loadApp,
}) => {
  const [dataVar, setDataVar] = React.useState({});

  function guardarInfo() {
    setLoadApp(true);
    let data = consultar();
    if (data === null) {
      notifyMessage('Los campos marcados con (*) son obligatorios.');
      setLoadApp(false);
    } else {
      setDataVar(data);
      let valid = validateObligatory();
      if (!valid) {
        notifyMessage('Los campos marcados con  (*) son obligatorios');
        setLoadApp(false);
      } else {
        fnGuardar();
      }
    }
  }
  const fnGuardar = async () => {
    let formData = new FormData();
    formData.append('datosVariable', base64.encode(JSON.stringify(dataVar)));
    let res = await guardarDatos(formData, 'variables');
    if (res.message) {
      notifyMessage(res.message);
      setLoadApp(false);
      onModalVisible(false);
    } else {
      notifyMessage('Error al guardar');
      setLoadApp(false);
    }
  };

  function validateObligatory() {
    return !(
      !dataVar.altura ||
      !dataVar.altura_copa ||
      !dataVar.dap1 ||
      !dataVar.dap2 ||
      !dataVar.fecha_ingreso ||
      dataVar.altura === '' ||
      dataVar.altura_copa === '' ||
      dataVar.dap1 === '' ||
      dataVar.dap2 === '' ||
      dataVar.fecha_ingreso === ''
    );
  }

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        onModalVisible(false);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.closeModal}>
            <Button
              icon={'close-circle-outline'}
              mode={'outlined'}
              color={theme.colors.primary}
              labelStyle={{fontSize: responsiveFontSize(4)}}
              style={styles.closeButton}
              compact={true}
              onPress={() => {
                onModalVisible(false);
              }}
            />
          </View>
          <View style={styles.slider}>
            <FormVariables alto={null} />
            <View style={{alignItems: 'flex-end'}}>
              <Button
                compact={true}
                uppercase={false}
                mode="contained"
                style={styles.guardar}
                color={theme.colors.primary}
                onPress={() => {
                  guardarInfo();
                }}>
                Guardar
              </Button>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalVariables;
