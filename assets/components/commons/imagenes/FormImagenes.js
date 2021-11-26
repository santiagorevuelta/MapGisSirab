import React from 'react';
import {Image, PermissionsAndroid, Platform, Text, View} from 'react-native';
import {theme} from '../../../core/theme';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import {styles} from './styles';

import ImagePicker from 'react-native-image-crop-picker';
import ImageResizer from 'react-native-image-resizer';
import * as RNFS from 'react-native-fs';

const options = {
  storageOptions: {
    skipBackup: false,
    path: 'MapgisSirab',
    quality: 0,
    privateDirectory: false,
  },
  compressImageMaxHeight: 1024,
  compressImageMaxWidth: 768,
  width: 1024,
  height: 768,
  mediaType: 'photo',
  cropping: false,
  multiple: false,
};

export default function ({
  dataImage = [],
  setDataImage,
  label = 'Registro fotográfico',
}) {
  return (
    <View style={styles.body}>
      <Text style={theme.textos.Label}>{label}</Text>
      <ScrollView style={styles.slide} horizontal>
        <View style={[styles.container, styles.containerAdd]}>
          <Button
            color={theme.colors.primary}
            style={styles.option}
            compact={true}
            labelStyle={{fontSize: responsiveFontSize(1.5)}}
            icon="camera-plus-outline"
            mode="contained"
            onPress={() => {
              camaraPress().then();
            }}>
            Camara
          </Button>
          <Button
            labelStyle={{fontSize: responsiveFontSize(1.5)}}
            color={theme.colors.primary}
            style={styles.option}
            compact={true}
            icon="camera-image"
            mode="outlined"
            onPress={() => {
              galleryPress().then();
            }}>
            Galeria
          </Button>
        </View>
        {dataImage.map((item, index) => (
          <View style={styles.container} key={index}>
            <Button
              style={styles.icon}
              color={theme.colors.primary}
              compact={true}
              labelStyle={{fontSize: responsiveFontSize(3)}}
              icon="delete-circle-outline"
              onPress={() => {
                let newJson = [];
                for (const img of dataImage) {
                  if (img.urlFoto !== item.urlFoto) {
                    newJson.push(img);
                  }
                }
                setDataImage(newJson);
              }}
            />
            <View style={styles.content}>
              <Image source={{uri: item.urlFoto}} style={styles.fotos} />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );

  async function galleryPress() {
    await requestCameraPermission();
    await ImagePicker.openPicker(options)
      .then(image => {
        renderFile(image).then();
      })
      .catch(e => {
        console.log(e);
      });
  }

  async function camaraPress() {
    await requestCameraPermission();
    ImagePicker.openCamera(options)
      .then(image => {
        renderFile(image).then();
      })
      .catch(e => {
        console.log(e);
      });
  }

  async function renderFile(response) {
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
      setDataImage([{urlFoto: pathImg, base64: base64}, ...dataImage]);
    }
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
}
