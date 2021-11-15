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

  useEffect(() => {
    let url = tsconfig[tsconfig.use].searchZone.combos;
    combosArbol(url).then(data => {
      setCombos(data);
    });
  }, [setCombos]);

  return (
    <>
      <HeaderModal type={label} setOption={setOption} backIndex={back} />
      <FormIngresar fnGuardar={fnGuardar} data={combos} />
    </>
  );
};

export default ModalIngresar;
