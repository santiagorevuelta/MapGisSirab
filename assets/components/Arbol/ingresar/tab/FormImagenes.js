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

export default function ({dataImage, setDataImage}) {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <View style={styles.body}>
      <PickerImageAcction
        visible={openModal}
        onModalClose={setOpenModal}
        setDataImage={setDataImage}
      />
      <ScrollView>
        {dataImage.map((item, index) => (
          <TouchableOpacity style={styles.container} key={index}>
            <view style={styles.content}>
              <Image source={{uri: item.urlFoto}} style={styles.fotos} />
            </view>
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={() => setOpenModal(!openModal)}>
          <view style={styles.content}>
            <Text style={styles.text}>{'Agregar o tomar foto'}</Text>
          </view>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
  },
  container: {},
  fotos: {},
  content: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {},
});
