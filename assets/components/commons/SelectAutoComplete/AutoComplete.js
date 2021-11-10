import React from 'react';
import {Dimensions, Platform, Pressable, Text, View} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import slyleios from './styleIos';
import slyleAndroid from './styleAndroid';

const {width, height} = Dimensions.get('window');

const inputAlto = width <= 380 ? 35 : 40;
const fontSizeInput = width <= 380 ? 12 : 15;

export default ({selectedItem, filterData, placeHolder}) => {
  return (
    <View
      style={[{height: inputAlto}, Platform.OS === 'ios' ? {zIndex: 10} : {}]}>
      <Autocomplete
        autoCapitalize="none"
        defaultValue={selectedItem}
        data={filterData}
        style={{
          backgroundColor: 'transparent',
          height: inputAlto,
          fontSize: fontSizeInput,
        }}
        containerStyle={
          Platform.OS === 'ios'
            ? slyleios.containerStyle
            : slyleAndroid.containerStyle
        }
        placeholder={placeHolder}
        inputContainerStyle={
          Platform.OS === 'ios'
            ? slyleios.inputContainerStyle
            : slyleAndroid.inputContainerStyle
        }
        listContainerStyle={
          Platform.OS === 'ios' ? null : slyleAndroid.listContainerStyle
        }
        listStyle={
          Platform.OS === 'ios' ? slyleios.listStyle : slyleAndroid.listStyle
        }
        hideResults={false}
        keyExtractor={(item, i) => i.toString()}
        //onChangeText={text => {
        //  props.onchangeInputs(text, 'direccion');
        //  props.searchDirection(text);
        //}}
        //onEndEditing={() => ubicarDireccion()}
        //onSubmitEditing={() => ubicarDireccion()}
        renderItem={({item}) => (
          <Pressable
            style={
              Platform.OS === 'ios'
                ? slyleios.SearchBoxTouch
                : slyleAndroid.SearchBoxTouch
            }
            onPress={() => {}}>
            <Text
              style={
                Platform.OS === 'ios'
                  ? slyleios.SearchBoxTextItem
                  : slyleAndroid.SearchBoxTextItem
              }>
              {item}
            </Text>
          </Pressable>
        )}
      />
      {/*      <Pressable
        style={
            ? styles.btnOculto
            : styles.btnLimpiar
        }
        onPress={limpiar}>
        <Image
          style={styles.iconoText}
          source={require('../../../../../iconos/ElipseX.png')}
        />
      </Pressable>*/}
    </View>
  );
};
