import React from 'react';
import config from '../tsconfig.json';
import {
  ModalIngresarArbol,
  ModalIngresarIntervencion,
  ModalIngresarZonaVerde,
  ModalIntervenciones,
  ModalOptions,
  ModalOptionsArbol,
  ModalOptionsType,
  ModalZonasVerdes,
} from './indexDashboard';

export function ViewRender(props) {
  if (props.type === 'inicio') {
    return <ModalOptions {...props} />;
  } else if ('Consulta,Ingresar'.indexOf(props.type) !== -1) {
    return <ModalOptionsType {...props} />;
  } else {
    if (props.back === 'Consulta') {
      switch (props.type) {
        case config.home[0].label:
          return <ModalOptionsArbol {...props} />;
        case config.home[1].label:
          return <ModalIntervenciones {...props} />;
        case config.home[2].label:
          return <ModalZonasVerdes {...props} />;
      }
    } else {
      switch (props.type) {
        case config.home[0].label:
          return <ModalIngresarArbol {...props} />;
        case config.home[1].label:
          return <ModalIngresarIntervencion {...props} />;
        case config.home[2].label:
          return <ModalIngresarZonaVerde {...props} />;
      }
    }
  }
}
