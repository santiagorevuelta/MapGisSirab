import initialjson from '../initialjson.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
let dataVar = initialjson.datosVariables;
let dataBorrado = false;

export async function asignar(data) {
  AsyncStorage.setItem('var', JSON.stringify(data));
  dataVar = data;
}
export function reset() {
  AsyncStorage.setItem('var', '');
  dataVar = initialjson.datosVariables;
}
export async function consultar() {
  let data = await AsyncStorage.getItem('var');
  return data === null ? dataVar : JSON.parse(data);
}
export function borrado() {
  return dataBorrado;
}

export function setBorrado(data) {
  dataBorrado = data;
}
