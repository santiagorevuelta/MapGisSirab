import React from 'react';
import {Modal, View} from 'react-native';
import {styles} from './modalStyle';
import {Button} from 'react-native-paper';
import {theme} from '../../core/theme';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import FormVariables from '../Arbol/ingresar/tab/FormVariables';

const ModalVariables = ({modalVisible = false, onModalVisible}) => {
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
            <FormVariables />
            <View style={{justifyContent: 'flex-end'}}>
              <Button
                compact={true}
                mode="contained"
                style={styles.guardar}
                color={theme.colors.primary}
                onPress={() => {}}>
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
