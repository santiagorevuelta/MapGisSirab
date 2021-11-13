import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../../core/theme';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import {styles} from './styles';

import ImagePicker from 'react-native-image-crop-picker';
import ImageResizer from 'react-native-image-resizer';
import * as RNFS from 'react-native-fs';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const options = {
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

let images = [];

export default function ({dataImage = [], setDataImage}) {
  const [openModal, setOpenModal] = React.useState(false);
  images = dataImage;
  return (
    <View style={styles.body}>
      <ScrollView style={styles.slide} horizontal persistentScrollbar={true}>
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
        <View style={[styles.container, styles.containerAdd]}>
            <Button
                color={theme.colors.primary}
                compact={true}
                labelStyle={{fontSize: responsiveFontSize(5)}}
                icon="camera-plus-outline"
                onPress={() => {
                  camaraPress(setDataImage).then();
                }}
            />
            <Button
                labelStyle={{fontSize: responsiveFontSize(5)}}
                color={theme.colors.primary}
                compact={true}
                icon="camera-image"
                onPress={() => {
                  galleryPress(setDataImage).then();
                }}
            />
        </View>
      </ScrollView>
    </View>
  );
}

async function galleryPress({setDataImage}) {
  await requestCameraPermission();
  await ImagePicker.openPicker(options)
      .then(image => {
        renderFile(image, setDataImage).then();
      })
      .catch(e => {
        console.log(e);
      });
}

async function camaraPress({setDataImage}) {
  await requestCameraPermission();
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
    const resizedImageUrl = await ImageResizer.createResizedImage(pathImg,1024,768,'JPEG',40,0,RNFS.DocumentDirectoryPath);
    const base64 = await RNFS.readFile(resizedImageUrl.uri, 'base64');
    images.push({urlFoto: pathImg, base64: base64})
    setTimeout(()=>{
      setDataImage(images);
    },200)
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
