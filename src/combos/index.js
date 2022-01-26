import AsyncStorage from '@react-native-async-storage/async-storage';
import tsconfig from '../tsconfig.json';
import combosArbol from '../helpers/combosArbol';

export const getData = async name => {
  try {
    const value = await AsyncStorage.getItem(name);
    if (value !== null) {
      return JSON.parse(value);
    }
    return [];
  } catch (e) {
    // error reading value
  }
};

export const storeData = async (name, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(name, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const loadCombos = async () => {
  let url = tsconfig.prefix + tsconfig[tsconfig.use].searchTree.combos;
  await combosArbol(url).then(res => {
    storeData('arbol', res).then();
  });
  url = tsconfig.prefix + tsconfig[tsconfig.use].searchZone.combos;
  await combosArbol(url).then(res => {
    storeData('zona', res).then();
  });
  url = tsconfig.prefix + tsconfig[tsconfig.use].searchIntervencion.combos;
  await combosArbol(url).then(res => {
    storeData('intervencionArbol', res).then();
  });
  url = tsconfig.prefix + tsconfig[tsconfig.use].intervencionZonaVerde.combos;
  await combosArbol(url).then(res => {
    storeData('intervencionZona', res).then();
  });
  url =
    tsconfig.prefix + tsconfig[tsconfig.use].intervencionZonaVerde.gestionar;
  await combosArbol(url).then(res => {
    storeData('intervencionZonaVerde', res).then();
  });
};
