import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import style from '../core/css/Pagination';
import {theme} from './theme';

export default function Pagination({meta, paginar}) {
  let paginaFinal = meta.last_page <= 5 ? meta.last_page : 5;
  let btnAnterior = [];
  let btnSiguiente = [];
  let paginaInicial = 1;

  if (meta.current_page > 3) {
    paginaFinal = meta.current_page + 2;
    if (paginaFinal > meta.last_page) {
      let diferencia = paginaFinal - meta.last_page;
      paginaInicial = meta.current_page - 2 - diferencia;
      paginaFinal = meta.last_page;
    } else {
      paginaInicial = meta.current_page - 2;
    }
  }

  if (meta.current_page > 1) {
    btnAnterior.push(
      <Button
        compact={true}
        key={'left'}
        contentStyle={style.contentStyle}
        labelStyle={style.labelStyle}
        style={style.style}
        icon="arrow-left-circle-outline"
        color={theme.colors.primary}
        onPress={() => {
          paginar(meta.current_page - 1);
        }}
      />,
    );
  }

  if (meta.current_page < meta.last_page) {
    btnSiguiente.push(
      <Button
        mode="text"
        compact={true}
        contentStyle={style.contentStyle}
        labelStyle={style.labelStyle}
        style={style.style}
        color={theme.colors.primary}
        key={'right'}
        icon="arrow-right-circle-outline"
        onPress={() => {
          paginar(meta.current_page + 1);
        }}
      />,
    );
  }

  let paginas = [];
  for (let i = paginaInicial; i <= paginaFinal; i++) {
    let active = false;
    if (i === meta.current_page) {
      active = true;
    }
    paginas.push(
      <Button
        mode="text"
        compact={true}
        key={i}
        color={!active ? theme.colors.primary : theme.colors.blanco}
        onPress={() => {
          paginar(i);
        }}
        style={[style.numberpage, active ? style.pageactive : {}]}>
        {i}
      </Button>,
    );
  }
  if (meta.total > 6) {
    return (
      <View style={style.divpagination}>
        {btnAnterior}
        {paginas}
        {btnSiguiente}
      </View>
    );
  } else {
    return null;
  }
}
