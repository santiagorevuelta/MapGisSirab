import React from 'react';
import PickerImageAcction from '../../../commons/imagenes/PickerImageAcction';
import {View} from 'react-native';
import {Button} from 'react-native-paper';

export default function ({dataImage, setDataImage}) {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <>
      <PickerImageAcction
        visible={openModal}
        onModalClose={setOpenModal}
        setDataImage={setDataImage}
      />
      <View>
        <Button icon="camera-iris" onPress={setOpenModal(!openModal)} />
      </View>
    </>
  );
}
