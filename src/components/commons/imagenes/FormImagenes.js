import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  PermissionsAndroid,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import {theme} from '../../../core/theme';
import {
  responsiveFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {styles} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'react-native-image-crop-picker';
import ImageResizer from 'react-native-image-resizer';
import * as RNFS from 'react-native-fs';
import {RadioButton} from 'react-native-paper';
import {
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import ModalImage from './modalImage';
import imagenesContext from '../../../../Context/imagenes/ImagenesContext';
import {UPDATE_IMAGENES} from '../../../../Context/Types';

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
  multiple: true,
};

export default function ({
  label,
  newStyles = {
    width: responsiveScreenWidth(28),
    height: responsiveScreenWidth(28),
  },
  alto = {height: '100%'},
}) {
  const [borrado, setBorrado] = useState(false);
  const [visible, setVisible] = useState(false);
  const [urlImage, setUrlImage] = useState(null);
  const {imagenes, updateImages} = useContext(imagenesContext);
  return (
    <ScrollView style={[styles.body, alto]}>
      <ModalImage
        modalVisible={visible}
        onModalVisible={setVisible}
        url={urlImage}
      />
      {label && <Text style={theme.textos.Label}>{label}</Text>}
      <View style={[styles.container, styles.containerAdd]}>
        <View style={styles.cam}>
          <TouchableOpacity
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
          </TouchableOpacity>
          <TouchableOpacity
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
          </TouchableOpacity>
        </View>
        <View style={styles.del}>
          {borrado && (
            <TouchableOpacity
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
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={[styles.slide]}>
        {imagenes?.map((item, i) => (
          <TouchableOpacity
            style={[styles.container, newStyles, {zIndex: -1}]}
            key={i}
            onPress={() => {
              if (!borrado) {
                setUrlImage(item.urlFoto);
                setVisible(!visible);
              }
            }}
            onLongPress={() => {
              setBorrado(!borrado);
              if (!borrado) {
                imagenes[i].checked = '1';
              }
              updateImages([...imagenes], UPDATE_IMAGENES);
            }}>
            {borrado && (
              <View style={[styles.icon, newStyles]}>
                <RadioButton
                  value={item.checked}
                  style={styles.radioButton}
                  uncheckedColor={theme.colors.blanco}
                  color={theme.colors.blanco}
                  status={item.checked === '1' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    imagenes[i].checked = item.checked === '0' ? '1' : '0';
                    updateImages([...imagenes], UPDATE_IMAGENES);
                  }}
                />
              </View>
            )}
            <Image source={{uri: item.urlFoto}} style={styles.fotos} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );

  async function galleryPress() {
    await requestCameraPermission();
    await ImagePicker.openPicker(options)
      .then(async image => {
        let newImg = [];
        for (const img of image) {
          let res = await renderFile(img);
          if (res !== null) {
            newImg.push(res);
          }
        }
        if (newImg.length > 0) {
          updateImages([...imagenes, ...newImg], UPDATE_IMAGENES);
        }
      })
      .catch(e => {
        console.log(e);
      });
  }

  async function deleteImage() {
    let newJson = [];
    for (const img of imagenes) {
      if (img.checked === '0') {
        newJson.push(img);
      }
    }
    updateImages([...newJson], UPDATE_IMAGENES);
    if (newJson.length === 0) {
      setBorrado(false);
    }
  }

  async function camaraPress() {
    await requestCameraPermission();
    ImagePicker.openCamera(options)
      .then(async image => {
        let res = await renderFile(image);
        if (res !== null) {
          updateImages([...imagenes, res], UPDATE_IMAGENES);
        }
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
      return {urlFoto: pathImg, base64: base64, checked: '0'};
    }
    return null;
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
