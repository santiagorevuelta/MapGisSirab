import React, {useEffect} from 'react';
import HeaderModal from '../../home/HeaderModal';
import FormIngresar from './FormIngresarZonaVerde';
import base64 from 'react-native-base64';
import guardarDatos from '../../../helpers/guardarDatos';
import {notifyMessage} from '../../../core/general';

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
    setLoadApp(true);
    let valid = validarObligatorio(datos);
    if (!valid) {
      notifyMessage('Los campos marcados con (*) son obligatorios');
      setLoadApp(false);
      return false;
    }

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
  };

  function validarObligatorio(datos) {
    return !(
      !datos.nombre ||
      !datos.codigo ||
      !datos.id_proyecto ||
      !datos.id_tipo_zona_verde ||
      !datos.geom ||
      !datos.primer_nivel ||
      !datos.segundo_nivel ||
      !datos.id_tipo_zona_verde ||
      !datos.area_m2_calculado ||
      !datos.area_m2 ||
      datos.nombre === '' ||
      datos.codigo === '' ||
      datos.id_proyecto === '' ||
      datos.id_tipo_zona_verde === '' ||
      datos.geom === '' ||
      datos.primer_nivel === '' ||
      datos.segundo_nivel === '' ||
      datos.id_tipo_zona_verde === '' ||
      datos.area_m2_calculado === '' ||
      datos.area_m2 === ''
    );
  }

  useEffect(() => {
    async function initial() {
      setLoadApp(true);
      let res = await getData('zona');
      setCombos(res);
      setIndexSnap(snp.length - 1);
      setLoadApp(false);
    }
    initial().then();
  }, []);

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
