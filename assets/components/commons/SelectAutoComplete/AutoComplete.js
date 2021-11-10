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


export default ({selectedItem, filterData, placeholder,label,id,list,onSelected}) => {
    const [listItems, setListItems] = useState([]);
    const [itemsFilter, setItemsFilter] = useState([]);
    const [value, setValue] = useState(selectedItem);
    useEffect(() => {
        let data = [];
        list.map((items) => {
            items.campo === id && data.push(items);
        });
        setListItems(data);
    }, []);

   const filterSelect = async (text) => {
       if(text !== ''){
           let datos = listItems.filter(function(element){
               return element.dato.toLowerCase().indexOf(text.toLowerCase()) != -1;
           });
           setItemsFilter(datos);
       }else{
           setItemsFilter([]);
       }
   }

  return (
    <View
      style={styleIos.container}>
        <Text style={theme.textos.LabelIn}>{label}</Text>
        <Autocomplete
        autoCapitalize="none"
        defaultValue={selectedItem}
        data={itemsFilter}
        style={styleIos.input}
        containerStyle={styleIos.containerStyle}
        placeholder={placeholder}
        inputContainerStyle={styleIos.inputContainerStyle}
        listContainerStyle={styleIos.listContainerStyle}
        listStyle={styleIos.listStyle}
        hideResults={false}
        keyExtractor={(item, i) => i.toString()}
        onChangeText={text => {
            filterSelect(text);
        }}
        //onEndEditing={() => ubicarDireccion()}
        //onSubmitEditing={() => ubicarDireccion()}
        renderItem={({item, index}) => (
          <TouchableOpacity
            key={index}
            style={styleIos.SearchBoxTouch}
            onPress={() => {
                onSelected(item);
                filterSelect('')
            }}>
            <Text
              style={styleIos.SearchBoxTextItem}>
              {item.dato}
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
