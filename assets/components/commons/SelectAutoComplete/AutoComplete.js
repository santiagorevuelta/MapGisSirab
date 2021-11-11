import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import {theme} from '../../../core/theme';

const styleIos = require('./styleIos');

export default ({
  selectedItem,
  placeholder = 'Todos...',
  label,
  id,
  list,
  onSelected,
}) => {
  const [listItems, setListItems] = useState([]);
  const [itemsFilter, setItemsFilter] = useState([]);
  useEffect(() => {
    let data = list.filter(item => {
      return item.campo.indexOf(id) !== -1;
    });
    setListItems(data);
  }, [id, list]);

  const filterSelect = async text => {
    if (text !== '') {
      let datos = listItems.filter(function (element) {
        return element.dato.toLowerCase().indexOf(text.toLowerCase()) !== -1;
      });
      setItemsFilter(datos);
    } else {
      setItemsFilter([]);
    }
  };

  return (
    <View style={styleIos.container}>
      <Text style={theme.textos.LabelIn}>{label}</Text>
      <Autocomplete
        autoCapitalize="none"
        defaultValue={selectedItem?.dato}
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
          filterSelect(text).then();
        }}
        //onEndEditing={() => ubicarDireccion()}
        //onSubmitEditing={() => ubicarDireccion()}
        renderItem={({item, index}) => (
          <TouchableOpacity
            key={index}
            style={styleIos.SearchBoxTouch}
            onPress={() => {
              onSelected(item);
              filterSelect('');
            }}>
            <Text style={styleIos.SearchBoxTextItem}>{item.dato}</Text>
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
