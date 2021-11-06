import {
    Image,
    PermissionsAndroid,
    Platform,
    Pressable,
    Text,
    View,
} from 'react-native';
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import ImageResizer from 'react-native-image-resizer';
let datosState = [];
let images = [];

export default props => {
    return (
        <View style={{flex: 1}}>
            <View style={styles.viewCamposFotos}>
                <View style={styles.viewCamposBtn}>
                     <View style={styles.viewicono}>
                        <Pressable
                            style={styles.btn}
                            onPress={() => {
                                camaraPress(props);
                            }}>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.viewCamposBtn}>
                    <View style={styles.viewicono}>
                        <Pressable
                            style={styles.btn}
                            onPress={() => {
                                galleryPress(props);
                            }}>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
};

async function galleryPress(props) {
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
                renderFile(dataImag,props).then();
            });
        })
        .catch(e => {
            console.log(e);
        });
}

async function camaraPress(props) {
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
            renderFile(image,props).then();
        })
        .catch((error) => {
            console.log(error.message);
        });
}

async function renderFile(response, props) {
    if (response !== undefined) {
        let pathImg = response.path == undefined ? response.uri : response.path;
        console.log(response)
        const base64 = "";
        images.push({urlFoto: pathImg, base64: base64});
    }
    //props.setImagenes(images);
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
