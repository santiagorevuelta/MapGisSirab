import React, {useState} from 'react';
import {View, Text, Pressable, Platform} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';
const momserratBold = Platform.OS !== 'ios' ? '' : '';
import {styles} from './styles';

import {theme} from '../../core/theme';

const SelectSimple = ({
  style = null,
  list = [],
  placeholder = 'Todos...',
  onSelected,
  valueSelected,
  label,
}) => {
  const [showSelector, setShowSelector] = useState(false);
  const [value, setValue] = useState(valueSelected);

  return (
    <View>
      <Text>{'ddd'}</Text>
      <Pressable
        style={style ? [styles.selector, style] : styles.selector}
        onPress={() => {
          setShowSelector(!showSelector);
        }}>
        {value ? (
          <Text style={[styles.placeholder, styles.value]}>{value.label}</Text>
        ) : (
          <Text style={styles.placeholder}>{placeholder}</Text>
        )}
        <IconAntDesign
          name={showSelector ? 'up' : 'down'}
          color={theme.colors.primary}
          size={responsiveFontSize(2)}
        />
      </Pressable>
      {showSelector && (
        <ScrollView style={styles.containerList} nestedScrollEnabled={true}>
          {list.map((item, i) => (
            <Pressable
              key={i}
              style={
                i == list.length - 1
                  ? [styles.containerItemList, {borderBottomWidth: 0}]
                  : styles.containerItemList
              }
              onPress={() => {
                if (item == value) {
                  setValue(null);
                  onSelected(null);
                } else {
                  setValue(item);
                  onSelected(item);
                }
                setShowSelector(false);
              }}>
              <Text
                style={
                  item == value
                    ? [
                        styles.placeholder,
                        styles.textItem,
                        {
                          color: '#000',
                          //fontFamily: momserratBold,
                        },
                      ]
                    : [styles.placeholder, styles.textItem]
                }>
                {item.label} {item == value ? '•' : ' '}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default SelectSimple;
