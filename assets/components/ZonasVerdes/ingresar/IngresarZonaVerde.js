import React, {useEffect} from 'react';
import HeaderModal from '../../home/HeaderModal';
import FormIngresar from './FormIngresarZonaVerde';
import combosArbol from '../../../helpers/combosArbol';
import tsconfig from '../../../tsconfig.json';

const ModalIngresar = ({label, setOption, back}) => {
  const [combos, setCombos] = React.useState([]);

  const fnGuardar = () => {
    console.log('ok');
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let url = tsconfig[tsconfig.use].searchZone.combos;
    let res = await combosArbol(url);
    setCombos(res);
  }, [setCombos]);

  return (
    <>
      <HeaderModal type={label} setOption={setOption} backIndex={back} />
      <FormIngresar fnGuardar={fnGuardar} combos={combos} />
    </>
  );
};

export default ModalIngresar;
