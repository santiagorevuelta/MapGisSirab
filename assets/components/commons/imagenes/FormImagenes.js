import React, {useEffect, useState} from 'react';
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
import {styles} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'react-native-image-crop-picker';
import ImageResizer from 'react-native-image-resizer';
import * as RNFS from 'react-native-fs';
import {RadioButton} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

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
  newStyles = {},
}) {
  const [borrado, setBorrado] = useState(false);

  return (
    <ScrollView style={styles.body}>
      <Text style={theme.textos.Label}>{label}</Text>
      <View style={[styles.container, styles.containerAdd]}>
        <View style={styles.cam}>
          <Pressable
            style={styles.option}
            onPress={() => {
              camaraPress().then();
            }}>
            <MaterialCommunityIcons
              name="camera-plus-outline"
              size={responsiveFontSize(3)}
              color={theme.colors.primary}
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
              color={theme.colors.primary}
            />
            <Text style={theme.textos.img}>Galeria</Text>
          </Pressable>
        </View>
        <View style={styles.del}>
          {borrado && (
            <Pressable
              style={styles.option}
              onPress={() => {
                deleteImage().then();
              }}>
              <MaterialCommunityIcons
                name="delete"
                size={responsiveFontSize(3)}
                color={theme.colors.primary}
              />
              <Text style={theme.textos.img}>Eliminar</Text>
            </Pressable>
          )}
        </View>
      </View>
      <Pressable
        onLongPress={() => {
          setBorrado(!borrado);
        }}>
        <View style={[styles.slide]}>
          {dataImage.map((item, i) => (
            <View style={[styles.container, newStyles]} key={i}>
              {borrado && (
                <View style={[styles.icon, newStyles]}>
                  <RadioButton
                    value={item.checked}
                    uncheckedColor={theme.colors.primary}
                    color={theme.colors.primary}
                    status={item.checked === '1' ? 'checked' : 'unchecked'}
                    onPress={() => {
                      dataImage[i].checked = item.checked === '0' ? '1' : '0';
                      setDataImage([...dataImage]);
                    }}
                  />
                </View>
              )}
              <Image source={{uri: item.urlFoto}} style={styles.fotos} />
            </View>
          ))}
        </View>
      </Pressable>
    </ScrollView>
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

  async function deleteImage() {
    let newJson = [];
    for (const img of dataImage) {
      if (img.checked === '0') {
        newJson.push(img);
      }
    }
    setDataImage([...newJson]);
    if (newJson.length === 0) {
      setBorrado(false);
    }
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
      setDataImage([
        ...dataImage,
        {urlFoto: pathImg, base64: base64, checked: '0'},
      ]);
    }
  }

  async function requestCameraPermission() {
    setBorrado(false);
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
