import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {theme} from '../../../core/theme';
import {responsiveHeight} from 'react-native-responsive-dimensions';

export default ({
  list = [],
  placeholder = 'Seleccione...',
  onSelected,
  value = '',
}) => {
  useEffect(() => {
    if (list === undefined) {
      list = [];
    }
  }, [list]);

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={value}
        style={styles.selectCss}
        onValueChange={(itemValue, itemIndex) => {
          console.log(itemValue);
          onSelected(itemValue);
        }}>
        <Picker.Item key={'0'} label={placeholder} value={''} />
        {list.map(item => (
          <Picker.Item key={item.id} label={item.dato} value={item.id} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B7B7B7',
    borderRadius: 25,
    height: responsiveHeight(theme.altoCampos),
  },
  selectCss: {
    width: '100%',
    top: -8,
    alignItems: 'center',
  },
});
