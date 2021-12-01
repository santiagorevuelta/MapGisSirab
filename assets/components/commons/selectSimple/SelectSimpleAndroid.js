import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {theme} from '../../../core/theme';
import {
  responsiveHeight,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

export default ({
  list = [],
  placeholder = 'Seleccione...',
  onSelected,
  value = '',
}) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={value}
        style={styles.selectCss}
        onValueChange={(itemValue, itemIndex) => {
          onSelected(itemValue);
        }}>
        <Picker.Item
          style={styles.pickers}
          key={'0'}
          label={placeholder}
          value={''}
        />
        {list?.map(item => (
          <Picker.Item
            style={styles.pickers}
            key={item.id}
            label={item.dato}
            value={item.id}
          />
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
    flex: 1,
    top: '-20%',
    fontSize: responsiveScreenFontSize(theme.font),
  },
  pickers: {
    fontSize: responsiveScreenFontSize(theme.font),
  },
});
