import React, {useState, useEffect} from 'react';
import {Dimensions, Platform, Pressable, Text, View, TouchableOpacity} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import  {responsiveHeight} from 'react-native-responsive-dimensions';
const styleIos = require('./styleIos');
const styleAndroid  = require('./styleAndroid');
import {theme} from '../../../core/theme';

const {width, height} = Dimensions.get('window');
const inputAlto = width <= 380 ? 35 : 40;
const fontSizeInput = width <= 380 ? 12 : 15;


export default ({selectedItem, filterData, placeholder,label,id,list}) => {
    const [listItems, setListItems] = useState({});
    const [value, setValue] = useState(selectedItem);
    useEffect(() => {
        let data = [];
        console.log(list)
        list.map((items) => {
            items.campo === id && data.push(items);
        });
        setTimeout(function(){
            setListItems(data);
            console.log(data)
        },1000)
    }, []);

  return (
    <View
      style={styleIos.container}>
        <Text style={theme.textos.LabelIn}>{label}</Text>
        <Autocomplete
        autoCapitalize="none"
        defaultValue={selectedItem}
        data={filterData}
        style={styleIos.input}
        containerStyle={styleIos.containerStyle}
        placeholder={placeholder}
        inputContainerStyle={styleIos.inputContainerStyle}
        listContainerStyle={styleIos.listContainerStyle
        }
        listStyle={styleIos.listStyle}
        hideResults={false}
        keyExtractor={(item, i) => i.toString()}
        //onChangeText={text => {
        //  props.onchangeInputs(text, 'direccion');
        //  props.searchDirection(text);
        //}}
        //onEndEditing={() => ubicarDireccion()}
        //onSubmitEditing={() => ubicarDireccion()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styleIos.SearchBoxTouch}
            onPress={() => {}}>
            <Text
              style={styleIos.SearchBoxTextItem}>
              {item}
            </Text>
          </TouchableOpacity>
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
