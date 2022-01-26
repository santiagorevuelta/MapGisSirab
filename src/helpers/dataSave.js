let dataVar = {};
let dataBorrado = false;

export function asignar(data) {
  dataVar = {...dataVar, ...data};
}

export function reset() {
  dataVar = {};
}
export function consultar() {
  return dataVar;
}
export function borrado() {
  return dataBorrado;
}

export function setBorrado(data) {
  dataBorrado = data;
}
