import React, {useEffect} from 'react';
import HeaderModal from '../../home/HeaderModal';
import FormIngresar from './FormIngresarZonaVerde';
import combosArbol from '../../../helpers/combosArbol';
import tsconfig from '../../../tsconfig.json';
import base64 from 'react-native-base64';
import guardarDatos from '../../../helpers/guardarDatos';
import {notifyMessage} from '../../../core/general';

import {limpiarMapaPolygon} from '../../map/BackgroundMap';

const ModalIngresar = ({label, setOption, back, setIndexSnap, snp}) => {
  const [combos, setCombos] = React.useState([]);

  const fnGuardar = async (datos, datosImagenes) => {
    let valid = validarObligatorio(datos);

    if (!valid) {
      notifyMessage('Los campos marcados con (*) son obligatorios');
      return;
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
      setOption(back);
    } else {
      notifyMessage('Error al guardar');
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
      !datos.area_m2
    );
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    setIndexSnap(snp.length - 1);
    limpiarMapaPolygon();
    let url = tsconfig[tsconfig.use].searchZone.combos;
    let res = await combosArbol(url);
    setCombos(res);
  }, [setCombos, setIndexSnap, snp]);

  return (
    <>
      <HeaderModal type={label} setOption={setOption} backIndex={back} />
      <FormIngresar
        fnGuardar={fnGuardar}
        combos={combos}
        setIndexSnap={setIndexSnap}
      />
    </>
  );
};

export default ModalIngresar;
