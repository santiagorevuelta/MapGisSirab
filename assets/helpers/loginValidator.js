import encode64 from './B64';

export async function loginValidator(user, password) {
  let url = 'https://www.medellin.gov.co/mapgis/Validacion.do';
  let myHeaders = new Headers();
  let data = new FormData();
  data.append('id_Persona', encode64(user));
  data.append('password', encode64(password));
  data.append('tipo', 1);
  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow',
  };
  return await fetch(url, requestOptions)
    .then(response => response.text())
    .then(result => {
      return result + '';
    })
    .catch(() => {
      return 'Error';
    });
}
