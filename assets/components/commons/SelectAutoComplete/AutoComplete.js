import React, {useEffect, useState} from 'react';
import {
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../../../core/theme';
import Autocomplete from 'react-native-autocomplete-input';
import {styles} from '../../Intervenciones/Ver/modalStyle';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {Button, Chip} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const styleIos = require('./styleIos');
const styleAndroid = require('./styleAndroid');

const style = Platform.OS === 'ios' ? styleIos : styleAndroid;

export default ({
  placeholder = 'Todos...',
  label,
  id,
  list,
  onSelected = [],
}) => {
  const [listItems, setListItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemsFilter, setItemsFilter] = useState([]);
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useEffect(() => {
    let data = list.filter(item => {
      return item.campo.indexOf(id) !== -1;
    });
    setListItems(data);
    setItemsFilter(data.length === 0 ? [] : data.splice(0, 20));
  }, [id, list]);

  const filterSelect = async text => {
    if (text !== '') {
      let datos = listItems.filter(function (element) {
        return element.dato.toLowerCase().indexOf(text.toLowerCase()) !== -1;
      });
      setItemsFilter(datos);
    } else {
      //setItemsFilter([]);
    }
  };
  return (
    <>
      <View>
        <Text style={theme.textos.LabelIn}>{label}</Text>
        <View style={styleSelect.campoSelect}>
          <ScrollView style={styleSelect.content} persistentScrollbar={true}>
            <GetChip />
          </ScrollView>
          <TouchableOpacity
            style={styleSelect.btn}
            onPress={() => {
              showDialog();
            }}>
            <IconAntDesign
              name={visible ? 'up' : 'down'}
              color={theme.colors.primary}
              size={responsiveFontSize(2)}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          hideDialog(false);
        }}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView, styleSelect.modal]}>
            <View style={[styles.closeModal, {height: 30}]}>
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
            <Autocomplete
              autoCapitalize="none"
              data={itemsFilter}
              containerStyle={style.containerStyle}
              placeholder={placeholder}
              inputContainerStyle={style.inputContainerStyle}
              listStyle={style.listStyle}
              keyExtractor={(item, i) => i.toString()}
              onChangeText={text => {
                filterSelect(text).then();
              }}
              flatListProps={{
                keyExtractor: (_, idx) => idx,
                renderItem: ({item}) => (
                  <Chip
                    icon={ex(item.id) ? 'tree' : 'tree-outline'}
                    mode={ex(item.id) ? 'flat' : 'outlined'}
                    style={style.SearchBoxTouch}
                    key={item.id}
                    selectedColor={theme.colors.primary}
                    selected={ex(item.id)}
                    onPress={() => {
                      let dato = item;
                      if (ex(dato.id)) {
                        let data = fl(dato.id);
                        setSelectedItems(data);
                        onSelected(data);
                      } else {
                        setSelectedItems([...selectedItems, dato]);
                        onSelected([...selectedItems, dato]);
                        hideDialog();
                      }
                    }}>
                    {item.dato}
                  </Chip>
                ),
              }}
            />
          </View>
        </View>
      </Modal>
    </>
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
      return <Text> Todos...</Text>;
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
            onSelected(item);
            setSelectedItems(item);
          }}>
          {index.dato}
        </Chip>,
      );
    }
    return arr;
  }
};

const styleSelect = StyleSheet.create({
  modal: {
    width: '90%',
    height: '90%',
    margin: 0,
    padding: 10,
  },
  campoSelect: {
    width: responsiveScreenWidth(90),
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: theme.radius+5,
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
  },
  selec: {
    marginTop: 1,
  },
  btnClose: {
    marginBottom: 10,
  },
  btn: {
    width: '10%',
    alignItems: 'center',
  },
});
