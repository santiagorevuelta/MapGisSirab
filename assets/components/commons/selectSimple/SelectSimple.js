import React, {useEffect, useState} from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';
import {theme} from '../../../core/theme';
import SelectSimpleAndroid from './SelectSimpleAndroid';

const SelectSimple = ({
  style = null,
  list = [],
  placeholder = 'Todos...',
  onSelected,
  valueSelected,
  id,
  label,
  key,
  disabledView = true,
  dependencia = false,
}) => {
  const [showSelector, setShowSelector] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [value, setValue] = useState(valueSelected);

  useEffect(() => {
    if (dependencia) {
      setListItems(list);
    } else {
      try {
        let data = list.filter(function (item) {
          return item.campo.indexOf(id) !== -1;
        });
        setListItems(data);
      } catch (e) {
        setListItems([]);
      }
    }
  }, [dependencia, id, list]);

  return (
    <View style={styles.container} key={key}>
      <Text style={theme.textos.LabelIn}>{label}</Text>
      {Platform.OS !== 'ios' ? (
        <SelectSimpleAndroid
          list={listItems}
          placeholder={placeholder}
          onSelected={onSelected}
          value={valueSelected}
          disabledView={disabledView}
        />
      ) : (
        <>
          <TouchableOpacity
            disabled={disabledView}
            style={style ? [styles.selector, style] : styles.selector}
            onPress={() => {
              setShowSelector(!showSelector);
            }}>
            {value ? (
              <Text style={[styles.placeholder, styles.value]}>
                {value.dato}
              </Text>
            ) : (
              <Text style={styles.placeholder}>{placeholder}</Text>
            )}
            <IconAntDesign
              name={showSelector ? 'up' : 'down'}
              color={theme.colors.primary}
              size={responsiveFontSize(2)}
            />
          </TouchableOpacity>
          {showSelector && (
            <ScrollView style={[styles.containerList, {zIndex: 10}]}>
              {listItems.map((item, i) => (
                <Pressable
                  key={i}
                  style={
                    i === list.length - 1
                      ? [
                          styles.containerItemList,
                          {borderBottomWidth: 0},
                          item === value && {
                            backgroundColor: theme.colors.hover,
                          },
                        ]
                      : [
                          styles.containerItemList,
                          item === value && {
                            backgroundColor: theme.colors.hover,
                          },
                        ]
                  }
                  onPress={() => {
                    if (item === value) {
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
                      item === value
                        ? [
                            styles.placeholder,
                            styles.textItem,
                            {
                              color: '#000',
                            },
                          ]
                        : [styles.placeholder, styles.textItem]
                    }>
                    {item.dato} {item === value ? '•' : ' '}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          )}
        </>
      )}
    </View>
  );
};

export default SelectSimple;
