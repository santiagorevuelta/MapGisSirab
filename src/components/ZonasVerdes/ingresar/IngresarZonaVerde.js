import React, {useEffect} from 'react';
import HeaderModal from '../../home/HeaderModal';
import FormIngresar from './FormIngresarZonaVerde';
import base64 from 'react-native-base64';
import guardarDatos from '../../../helpers/guardarDatos';
import {campoObligatory, notifyMessage} from '../../../core/general';

import {limpiarMapaPolygon} from '../../map/BackgroundMap';
import {getData} from '../../../combos';

const ModalIngresar = ({
  label,
  setOption,
  back,
  setIndexSnap,
  snp,
  setLoadApp,
}) => {
  const [combos, setCombos] = React.useState([]);

  const fnGuardar = async (datos, datosImagenes) => {
    console.log(datos);
    setLoadApp(true);
    if (datos.nombre === '' || !datos.nombre) {
      campoObligatory('Nombre zona verde');
      setLoadApp(false);
    } else if (datos.fecha === '' || !datos.fecha) {
      campoObligatory('Fecha de ingreso');
      setLoadApp(false);
    } else if (datos.codigo === '' || !datos.codigo) {
      campoObligatory('Código zona verde');
      setLoadApp(false);
    } else if (datos.id_proyecto === '' || !datos.id_proyecto) {
      campoObligatory('Proyecto');
      setLoadApp(false);
    } else if (datos.id_tipo_zona_verde === '' || !datos.id_tipo_zona_verde) {
      campoObligatory('Tipo zona verde ');
      setLoadApp(false);
    } else if (datos.geom === '' || !datos.geom) {
      campoObligatory('Poligono');
      setLoadApp(false);
    } else if (datos.primer_nivel === '' || !datos.primer_nivel) {
      campoObligatory('Comuna');
      setLoadApp(false);
    } else if (datos.segundo_nivel === '' || !datos.segundo_nivel) {
      campoObligatory('Barrio');
      setLoadApp(false);
    } else if (datos.area_m2 === '' || !datos.area_m2) {
      campoObligatory('Área m²');
      setLoadApp(false);
    } else if (datos.area_m2_calculado === '' || !datos.area_m2_calculado) {
      campoObligatory('Área calculada m²');
      setLoadApp(false);
    } else {
      datos.fecha = datos.fecha.split('/').reverse().join('-');
      let formData = new FormData();
      formData.append('datosZona', base64.encode(JSON.stringify(datos)));
      formData.append(
        'datosImagenes',
        base64.encode(JSON.stringify(datosImagenes)),
      );
      let res = await guardarDatos(formData, 'searchZone');
      if (res.message) {
        notifyMessage(res.message);
        limpiarMapaPolygon();
        setLoadApp(false);
        return 'Ok';
      } else {
        notifyMessage('Error al guardar');
        setLoadApp(false);
        return false;
      }
    }
  };

  useEffect(() => {
    async function initial() {
      setLoadApp(true);
      let res = await getData('zona');
      setCombos(res);
      setIndexSnap(snp.length - 1);
      setLoadApp(false);
    }
    initial().then();
  }, [setIndexSnap, setLoadApp, snp.length]);

  return (
    <>
      <HeaderModal type={label} setOption={setOption} backIndex={back} />
      <FormIngresar
        fnGuardar={fnGuardar}
        combos={combos}
        setIndexSnap={setIndexSnap}
        setLoadApp={setLoadApp}
      />
    </>
  );
};

export default ModalIngresar;
