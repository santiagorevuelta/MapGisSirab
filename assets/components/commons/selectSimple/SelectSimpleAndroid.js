import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {theme} from '../../../core/theme';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
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
        collapsable={false}
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
    height: '95%',
    borderWidth: 1,
    borderColor: '#B7B7B7',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 25,
  },
  selectCss: {
    width: '100%',
    height: '95%',
    fontSize: responsiveScreenFontSize(theme.font),
  },
  pickers: {
    width: '100%',
    height: '95%',
    fontSize: responsiveScreenFontSize(theme.font),
  },
});
