import React, {useContext, useEffect} from 'react';
import {Modal, View} from 'react-native';
import {styles} from '../Variables/modalStyle';
import {Button} from 'react-native-paper';
import {theme} from '../../core/theme';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {notifyMessage} from '../../core/general';
import base64 from 'react-native-base64';
import guardarDatos from '../../helpers/guardarDatos';
import FormImagenes from '../commons/imagenes/FormImagenes';
import imagenesContext from '../../../Context/imagenes/ImagenesContext';

const ModalImagenes = ({modalVisible = false, onModalVisible, setLoadApp}) => {
  const {imagenes, deleteImages} = useContext(imagenesContext);
  useEffect(() => {
    deleteImages();
  }, []);

  const fnGuardar = async () => {
    if (imagenes.length === 0) {
      return;
    }
    let formData = new FormData();
    formData.append(
      'registrofotografico',
      base64.encode(JSON.stringify(imagenes)),
    );
    let res = await guardarDatos(formData, 'imagenes');
    if (res.message) {
      notifyMessage(res.message);
      deleteImages();
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
            <FormImagenes />
            <View style={{alignItems: 'flex-end'}}>
              <Button
                compact={true}
                uppercase={false}
                mode="contained"
                style={styles.guardar}
                color={theme.colors.primary}
                onPress={() => {
                  fnGuardar();
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

export default ModalImagenes;
