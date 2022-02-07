import React, {useContext, useEffect} from 'react';
import {Modal, View} from 'react-native';
import {styles} from './modalStyle';
import {Button} from 'react-native-paper';
import {theme} from '../../core/theme';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import FormVariables from '../Arbol/ingresar/tab/FormVariables';
import {consultar} from '../../helpers/dataSave';
import {campoObligatory, notifyMessage} from '../../core/general';
import base64 from 'react-native-base64';
import guardarDatos from '../../helpers/guardarDatos';
import VariableContext from '../../../Context/variables/VariableContext';

const ModalVariables = ({
  modalVisible = false,
  onModalVisible,
  setLoadApp,
  items,
  setItems,
  idArbol,
}) => {
  const {variables, deleteVariables} = useContext(VariableContext);
  async function guardarInfo() {
    setLoadApp(true);
    if (variables.altura === '' || !variables.altura) {
      campoObligatory('Altura');
      setLoadApp(false);
    } else if (variables.altura_copa === '' || !variables.altura_copa) {
      campoObligatory('Altura copa');
      setLoadApp(false);
    } else if (variables.dap1 === '' || !variables.dap1) {
      campoObligatory('DAP1');
      setLoadApp(false);
    } else if (variables.dap2 === '' || !variables.dap2) {
      campoObligatory('DAP2');
      setLoadApp(false);
    } else if (variables.fecha_ingreso === '' || !variables.fecha_ingreso) {
      campoObligatory('fecha ingreso');
      setLoadApp(false);
    } else {
      await fnGuardar();
    }
  }

  useEffect(() => {
    deleteVariables();
  }, []);

  const fnGuardar = async () => {
    let formData = new FormData();
    formData.append('idArbol', base64.encode(idArbol));
    formData.append('datosVariables', base64.encode(JSON.stringify(variables)));
    let res = await guardarDatos(formData, 'variables');
    if (res.message) {
      setItems([...items, variables]);
      notifyMessage(res.message);
      deleteVariables();
      setLoadApp(false);
      onModalVisible(false);
    } else {
      notifyMessage('Error al guardar');
      setLoadApp(false);
    }
  };

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
