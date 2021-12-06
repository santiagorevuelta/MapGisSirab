import React from 'react';
import {
  Image,
  PermissionsAndroid,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import {theme} from '../../../core/theme';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './styles';

import ImagePicker from 'react-native-image-crop-picker';
import ImageResizer from 'react-native-image-resizer';
import * as RNFS from 'react-native-fs';
import Button from '../../ButtonInsert';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const options = {
  storageOptions: {
    skipBackup: true,
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
          <Pressable
            style={styles.option}
            onPress={() => {
              camaraPress().then();
            }}>
            <MaterialCommunityIcons
              name="camera-plus-outline"
              size={responsiveFontSize(3)}
              color={theme.colors.blanco}
            />
            <Text style={theme.textos.img}>Camara</Text>
          </Pressable>
          <Pressable
            style={styles.option}
            onPress={() => {
              galleryPress().then();
            }}>
            <MaterialCommunityIcons
              name="camera-image"
              size={responsiveFontSize(3)}
              color={theme.colors.blanco}
            />
            <Text style={theme.textos.img}>Galeria</Text>
          </Pressable>
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
