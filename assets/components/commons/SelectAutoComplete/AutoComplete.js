import React, {useEffect, useState} from 'react';
import {Platform, Text, TouchableOpacity} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import {theme} from '../../../core/theme';
import Animated from 'react-native-reanimated';

const styleIos = require('./styleIos');
const styleAndroid = require('./styleAndroid');

const style = Platform.OS === 'ios' ? styleIos : styleAndroid;

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
    setItemsFilter(data.length === 0 ? [] : data.splice(0, 0));
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
    <Animated.View style={style.container} contentContainerStyle={{flex: 1}}>
      <Text style={theme.textos.LabelIn}>{label}</Text>
      <Autocomplete
        autoCapitalize="none"
        value={selectedItem}
        data={itemsFilter}
        containerStyle={style.containerStyle}
        placeholder={placeholder}
        inputContainerStyle={style.inputContainerStyle}
        //listContainerStyle={style.listContainerStyle}
        listStyle={style.listStyle}
        hideResults={false}
        keyExtractor={(item, i) => i.toString()}
        onChangeText={text => {
          filterSelect(text).then();
        }}
        flatListProps={{
          keyExtractor: (_, idx) => idx,
          renderItem: ({item}) => (
            <TouchableOpacity
              style={style.SearchBoxTouch}
              key={item.id}
              onPress={() => {
                onSelected(item);
                filterSelect('').then();
              }}>
              <Text style={style.SearchBoxTextItem}>{item.dato}</Text>
            </TouchableOpacity>
          ),
        }}
        //onEndEditing={() => ubicarDireccion()}
        //onSubmitEditing={() => ubicarDireccion()}
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
    </Animated.View>
  );
};
