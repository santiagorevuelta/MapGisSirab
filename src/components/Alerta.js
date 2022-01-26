import React from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {theme} from '../core/theme';

export default function ModalAlert({
  modalVisible = true,
  onModalVisible,
  buttons = [],
  title,
  msg,
}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        onModalVisible(false);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.msg}>{msg}</Text>
          <View style={styles.btn}>
            {buttons?.map((item, i) => (
              <Button
                key={i}
                onPress={item.onPress}
                uppercase={false}
                labelStyle={{color: theme.colors.primary}}
                color={'gray'}>
                {item.text}
              </Button>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btn: {
    width: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'roboto',
    fontSize: responsiveFontSize(2.5),
  },
  msg: {
    fontFamily: 'roboto',
    fontSize: responsiveFontSize(2),
    marginVertical: '2%',
  },
});
