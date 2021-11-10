import React from 'react';
import PickerImageAcction from './PickerImageAcction';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../../../core/theme';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {Button} from 'react-native-paper';

export default function ({dataImage = [], setDataImage}) {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <View style={styles.body}>
      <PickerImageAcction
        visible={openModal}
        onModalClose={setOpenModal}
        dataImage={dataImage}
        setDataImage={setDataImage}
      />
      <ScrollView style={styles.slide} horizontal>
        {dataImage.map((item, index) => (
          <View style={styles.container} key={index}>
            <Button
                style={styles.icon}
                color={theme.colors.primary}
                compact={true}
                labelStyle={{fontSize: responsiveFontSize(3)}}
                icon="delete-circle-outline"
                onPress={() => {
                  let newJson = []
                  for (const img of dataImage) {
                    if(img.urlFoto != item.urlFoto)
                      newJson.push(img)
                  }
                  setDataImage(newJson);
                }}
            />
            <View style={styles.content}>
              <Image source={{uri: item.urlFoto}} style={styles.fotos} />
            </View>
          </View>
        ))}
        <TouchableOpacity onPress={() => setOpenModal(!openModal)} style={[styles.container,styles.containerAdd]}>
          <View style={styles.content}>
            <Text style={styles.text}>{'Agregar o tomar foto'}</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: theme.colors.blanco,
    paddingTop: '5%',
    marginBottom: '5%',
  },
  container: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderStyle:'dashed',
    height: 150,
    width: 170,
    borderRadius: theme.radius,
    marginRight: 10
  },
  icon:{
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
    borderRadius: 100,
    height: 30,
    width: 31,
    backgroundColor: theme.colors.blanco,
  },
  slide:{
    flexDirection: 'row',
  },
  fotos: {
    height: '100%',
    width:'100%',
    resizeMode: 'cover',
    borderRadius: theme.radius
  },
  text: {
    color: theme.colors.secondary,
    fontStyle: 'italic'
  },
  containerAdd:{
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#B5B2B2'
  }
});
