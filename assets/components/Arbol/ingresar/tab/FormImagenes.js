import React from 'react';
import PickerImageAcction from '../../../commons/imagenes/PickerImageAcction';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../../../../core/theme';

export default function ({dataImage = [], setDataImage}) {
  const [openModal, setOpenModal] = React.useState(false);
  console.log(dataImage)
  return (
    <View style={styles.body}>
      <PickerImageAcction
        visible={openModal}
        onModalClose={setOpenModal}
        dataImage={dataImage}
        setDataImage={setDataImage}
      />
      <ScrollView style={styles.slide} horizontal>
        {dataImage.data.map((item, index) => (
          <TouchableOpacity style={styles.container} key={index}>
            <View style={styles.content}>
              <Image source={{uri: item.urlFoto}} style={styles.fotos} />
            </View>
          </TouchableOpacity>
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
    paddingTop: '5%'
  },
  container: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderStyle:'dashed',
    height: 150,
    width: 160,
    borderRadius: theme.radius,
    marginRight: 10
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
  content: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
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
