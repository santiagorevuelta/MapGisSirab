import {Modal, PermissionsAndroid, Platform, View} from 'react-native';
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import ImageResizer from 'react-native-image-resizer';
import {Button} from 'react-native-paper';
import {styles} from './styles';
import {theme} from '../../../core/theme';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import * as RNFS from 'react-native-fs';

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
          color={theme.colors.primary}
          compact={true}
          labelStyle={{fontSize: responsiveFontSize(4)}}
          icon="camera-plus-outline"
          onPress={() => {
            camaraPress(setDataImage).then();
          }}
        />
        <Button
          labelStyle={{fontSize: responsiveFontSize(4)}}
          color={theme.colors.primary}
          compact={true}
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
      renderFile(image, setDataImage).then();
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
    const resizedImageUrl = await ImageResizer.createResizedImage(
      pathImg,
      1024,
      768,
      'JPEG',
      40,
      0,
      RNFS.DocumentDirectoryPath,
    );
    const base64 = await RNFS.readFile(resizedImageUrl.uri, 'base64');
    setDataImage({urlFoto: pathImg, base64: base64});
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
