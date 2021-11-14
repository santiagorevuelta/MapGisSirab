import React, {useState} from 'react';
import {Image, View, Pressable, Modal, Platform, Text} from 'react-native';
import Swiper from 'react-native-swiper';
import {styles} from './modalStyle';
import RenderImagen from './RenderImagen'


const ModalIntervencion = ({modalVisible = false, onModalVisible, data = null}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                onModalVisible(false, null);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                   <RenderImagen data={data}/>
                </View>
            </View>
        </Modal>
    );
};

function RenderImagen({data}) {
    return (
        <Swiper
            autoplay={false}
            showsButtons={false}
            showsPagination={true}
            ref="swiper"
            effect="Fade"
            dot={
                <View
                    style={{
                        backgroundColor: '#fff',
                        width: 10,
                        height: 10,
                        borderRadius: 50,
                        marginLeft: 5,
                        marginRight: 5,
                        marginTop: 3,
                        marginBottom: 3,
                    }}
                />
            }
            activeDot={
                <View
                    style={{
                        backgroundColor: '#03AED8',
                        width: 25,
                        height: 25,
                        borderRadius: 50,
                        marginLeft: 5,
                        marginRight: 5,
                        marginTop: 3,
                        marginBottom: 3,
                    }}
                />
            }
            paginationStyle={{
                bottom: '10%',
            }}
            preloadImages={false}
            loop={false}>
            <View style={stylesSlide.slide}>
                {data.map(item=>(<View><RenderImagen source={{uri: data.url}} style={styles.fotoModal} /></View>))}
            </View>
        </Swiper>
    );
}


export default ModalImage;
