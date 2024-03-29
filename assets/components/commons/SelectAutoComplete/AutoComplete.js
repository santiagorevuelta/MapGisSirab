import React, {useEffect, useState} from 'react';
import {
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../../../core/theme';
import {styles} from '../../Intervenciones/Ver/modalStyle';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Chip} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const styleIos = require('./styleIos');
const styleAndroid = require('./styleAndroid');

const style = Platform.OS === 'ios' ? styleIos : styleAndroid;

export default ({
  stylesNew = {},
  placeholder = 'Todos...',
  label,
  id,
  multiple = true,
  valueSelected,
  list,
  Limpiar = false,
  onSelected,
}) => {
  const [listItems, setListItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemsFilter, setItemsFilter] = useState([]);
  const [textValue, setItemsTextValue] = useState('');
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useEffect(() => {
    async function initial() {
      if (Limpiar) {
        setSelectedItems(valueSelected);
      }
      let data = await list.filter(item => {
        return item.campo.indexOf(id) !== -1;
      });
      setListItems(data);
      setItemsFilter(data.length < 20 ? data : data.splice(0, 20));
    }
    initial().then();
  }, [Limpiar, id, list, valueSelected]);

  const filterSelect = async text => {
    setItemsTextValue(text);
    if (text !== '') {
      let datos = listItems.filter(function (element) {
        return element.dato.toLowerCase().indexOf(text) !== -1;
      });
      setItemsFilter(datos);
    } else {
      setItemsFilter(
        listItems.length < 20 ? listItems : listItems.splice(0, 20),
      );
    }
  };
  return (
    <View style={[styleSelect.container, stylesNew]}>
      <Text style={theme.textos.LabelIn}>{label}</Text>
      <TouchableOpacity
        style={styleSelect.campoSelect}
        onPress={() => {
          showDialog();
        }}>
        <ScrollView style={styleSelect.content} persistentScrollbar={true}>
          <GetChip />
        </ScrollView>
        <View style={styleSelect.btn}>
          <IconAntDesign
            name={visible ? 'up' : 'down'}
            color={theme.colors.primary}
            size={responsiveFontSize(2)}
          />
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          hideDialog(false);
        }}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView, styleSelect.modal]}>
            <View style={[styles.closeModal, {height: '5%'}]}>
              <TouchableOpacity
                style={styleSelect.btnClose}
                onPress={() => {
                  hideDialog();
                }}>
                <IconAntDesign
                  name={'close'}
                  color={theme.colors.primary}
                  size={responsiveFontSize(3)}
                />
              </TouchableOpacity>
            </View>
            <TextInput
              autoCapitalize="none"
              value={textValue}
              style={style.containerStyle}
              placeholder={placeholder}
              onEndEditing={() => {
                filterSelect(textValue).then();
              }}
              onSubmitEditing={() => {
                filterSelect(textValue).then();
              }}
              onChangeText={text => {
                filterSelect(text.toLowerCase()).then();
              }}
            />
            <ScrollView style={style.listStyle}>
              {itemsFilter.length === 0 ? (
                <Chip style={style.SearchBoxTouch}>Sin resultados</Chip>
              ) : (
                itemsFilter?.map(item => (
                  <Chip
                    icon={ex(item.id) ? 'tree' : 'tree-outline'}
                    mode={ex(item.id) ? 'flat' : 'outlined'}
                    style={style.SearchBoxTouch}
                    key={item.id}
                    selectedColor={theme.colors.primary}
                    selected={ex(item.id)}
                    onPress={() => {
                      let dato = item;
                      if (multiple) {
                        if (ex(dato.id)) {
                          let data = fl(dato.id);
                          setSelectedItems(data);
                          onSelected(data);
                        } else {
                          setSelectedItems([...selectedItems, dato]);
                          onSelected([...selectedItems, dato]);
                          hideDialog();
                        }
                      } else {
                        setSelectedItems([dato]);
                        onSelected(dato.id);
                        hideDialog();
                      }
                    }}>
                    {item.dato}
                  </Chip>
                ))
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );

  function ex(index) {
    return (
      selectedItems.filter(function (i) {
        return i.id === index + '';
      }).length > 0
    );
  }

  function fl(index) {
    return selectedItems.filter(function (i) {
      return i.id !== index;
    });
  }

  function GetChip() {
    let arr = [];
    if (selectedItems.length === 0) {
      return <Text style={styleSelect.placeholder}>{placeholder}.</Text>;
    }

    for (const index of selectedItems) {
      arr.push(
        <Chip
          key={index.id}
          data={index}
          style={styleSelect.selec}
          icon="tree"
          selectedColor={theme.colors.primary}
          closeIcon
          onClose={() => {
            let item = fl(index.id);
            if (multiple) {
              onSelected(item);
              setSelectedItems(item);
            } else {
              setSelectedItems(item);
              onSelected('');
            }
          }}>
          {index.dato}
        </Chip>,
      );
    }
    return arr;
  }
};

const styleSelect = StyleSheet.create({
  container: {
    width: responsiveWidth(89),
    marginTop: responsiveWidth(3),
  },
  modal: {
    width: '90%',
    height: '90%',
    margin: 0,
    padding: 10,
  },
  campoSelect: {
    width: '100%',
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: theme.radius + 5,
    alignItems: 'center',
    alignContent: 'center',
    borderColor: theme.colors.border,
    minHeight: responsiveHeight(theme.altoCampos),
    maxHeight: responsiveHeight(theme.altoCampos * 2),
    paddingBottom: 1,
  },
  content: {
    borderRadius: theme.radius,
    paddingRight: 10,
    paddingLeft: 2,
    alignContent: 'space-between',
    alignSelf: 'auto',
    flexWrap: 'wrap',
  },
  selec: {
    marginTop: 1,
  },
  btnClose: {
    position: 'absolute',
    marginBottom: 0,
  },
  placeholder: {
    marginLeft: 10,
    color: theme.colors.headers,
  },
  btn: {
    width: '10%',
    alignItems: 'center',
  },
});
