import {Modal, PermissionsAndroid, Platform, View} from 'react-native';
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {Button} from 'react-native-paper';
import {styles} from './styles';

let images = [];
export default ({setDataImage, visible, onModalClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => onModalClose()}>
      <View style={styles.modal}>
        <Button
          icon="camera-plus-outline"
          onPress={() => {
            camaraPress(setDataImage).then();
          }}
        />
        <Button
          icon="camera-image"
          onPress={() => {
            galleryPress(setDataImage).then();
          }}
        />
      </View>
    </Modal>
  );
};

async function galleryPress(setDataImage) {
  await requestCameraPermission();
  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'MapgisSirab',
      privateDirectory: true,
    },
    compressImageMaxHeight: 1024,
    compressImageMaxWidth: 768,
    width: 1024,
    height: 768,
    mediaType: 'photo',
    cropping: false,
    multiple: false,
  };
  await ImagePicker.openPicker(options)
    .then(image => {
      image.map((dataImag, index) => {
        renderFile(dataImag, setDataImage).then();
      });
    })
    .catch(e => {
      console.log(e);
    });
}

async function camaraPress(setDataImage) {
  await requestCameraPermission();
  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'MapgisSirab',
      quality: 0,
      privateDirectory: true,
    },
    compressImageMaxHeight: 1024,
    compressImageMaxWidth: 768,
    width: 1024,
    height: 768,
    mediaType: 'photo',
    cropping: false,
    multiple: false,
  };
  ImagePicker.openCamera(options)
    .then(image => {
      renderFile(image, setDataImage).then();
    })
    .catch(error => {
      console.log(error.message);
    });
}

async function renderFile(response, setDataImage) {
  if (response !== undefined) {
    let pathImg = response.path == undefined ? response.uri : response.path;
    console.log(response);
    const base64 = '';
    images.push({urlFoto: pathImg, base64: base64});
  }
  //props.setDataImage(images);
}

async function requestCameraPermission() {
  if (Platform.OS !== 'ios') {
    try {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);

      const permissionCamera = await PermissionsAndroid.check(
        'android.permission.CAMERA',
      );
      const permissionWriteStorage = await PermissionsAndroid.check(
        'android.permission.WRITE_EXTERNAL_STORAGE',
      );
      if (permissionCamera && permissionWriteStorage) {
        await requestCameraPermission;
      }
      if (!permissionCamera || !permissionWriteStorage) {
        return {
          error: 'Failed to get the required permissions.',
        };
      }
    } catch (error) {
      return {
        error: 'Failed to get the required permissions.',
      };
    }
  }
}
