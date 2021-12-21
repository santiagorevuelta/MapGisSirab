import React from 'react';
import {Modal, Pressable, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {styles} from './modalStyle';
import RenderImagen from '../../commons/RenderImagen';
import {Button, Paragraph} from 'react-native-paper';
import {theme} from '../../../core/theme';
import {notifyMessage} from '../../../core/general';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const ModalIntervention = ({
  modalVisible = false,
  onModalVisible,
  data = {},
}) => {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        onModalVisible(false);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.closeModal}>
            <Button
              icon={'close'}
              mode={'outlined'}
              color={theme.colors.primary}
              labelStyle={{fontSize: responsiveFontSize(3.2)}}
              style={styles.closeButton}
              compact={true}
              onPress={() => {
                onModalVisible(false);
              }}
            />
          </View>
          <View style={styles.slider}>
            <RenderImageIntervention data={data} />
            <Text style={theme.textos.LabelIn}>
              {'Intervención # ' + data.id_intervencion}
            </Text>
          </View>
          <RenderInfo data={data} />
        </View>
      </View>
    </Modal>
  );
};

function RenderImageIntervention({data}) {
  let slide = React.useRef();
  return (
    <Swiper
      showsButtons={false}
      ref={slide}
      effect="Fade"
      preloadImages={false}
      loop={true}>
      {/*  {data.map(item => (
          <View>*/}
      <RenderImagen url={data.ruta_foto_web} style={styles.fotoModal} />
      {/*      </View>
        ))}*/}
    </Swiper>
  );
}

function RenderInfo({data}) {
  return (
    <>
      <View style={styles.row}>
        <Info label={'Tipo'} text={data.tipo_intervencion} />
        <Info label={'Fecha'} text={data.fecha} />
      </View>
      <View style={styles.row}>
        <Info label={'Proyecto'} text={data.nombre_proyecto} />
        <Info label={'Codigo proyecto'} text={data.codigo_proyecto} />
      </View>
      <View style={styles.row}>
        <Info label={'Entidad'} text={data.entidad} />
        <Info label={'Estado'} text={data.estado} />
      </View>
      <View style={styles.row}>
        <Info
          label={'Secundarias'}
          text={data.secundarias}
          len={false}
          complete={true}
        />
      </View>
    </>
  );
}

function Info({label, text, len = true, complete = false}) {
  return (
    <View style={[styles.div, complete ? {width: '100%'} : {}]}>
      <Text style={[theme.ver.Label, styles.title]}>{label}</Text>
      <Pressable
        onPress={() => {
          notifyMessage(text);
        }}>
        <Paragraph style={[theme.ver.Textos, styles.result]}>
          {len
            ? text && text.length > 22
              ? text.slice(0, 22) + '...'
              : text
            : text}
        </Paragraph>
      </Pressable>
    </View>
  );
}

export default ModalIntervention;
