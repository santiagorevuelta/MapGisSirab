import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {theme} from '../../../core/theme';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';

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
        tvParallaxMagnification={1}
        pointerEvents={'box-only'}
        itemStyle={styles.pickers}
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
    borderWidth: 1,
    borderColor: '#B7B7B7',
    borderRadius: 25,
  },
  selectCss: {
    width: '100%',
    alignContent: 'center',
    top: '0%',
    justifyContent: 'center',
    fontSize: responsiveScreenFontSize(theme.font),
  },
  pickers: {
    width: '100%',
    position: 'relative',
    height: '100%',
    fontSize: responsiveScreenFontSize(theme.font),
  },
});
