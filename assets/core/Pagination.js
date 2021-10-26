import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {Button, Card, Paragraph, Title} from 'react-native-paper';
import style from '../core/css/Pagination';
import {theme} from './theme';

export default function Pagination(props) {
  let paginaFinal = props.meta.last_page <= 5 ? props.meta.last_page : 5;
  let btnAnterior = [];
  let btnSiguiente = [];
  let paginaInicial = 1;

  if (props.meta.current_page > 3) {
    paginaFinal = props.meta.current_page + 2;
    if (paginaFinal > props.meta.last_page) {
      let diferencia = paginaFinal - props.meta.last_page;
      paginaInicial = props.meta.current_page - 2 - diferencia;
      paginaFinal = props.meta.last_page;
    } else {
      paginaInicial = props.meta.current_page - 2;
    }
  }

  if (props.meta.current_page > 1) {
    btnAnterior.push(
      <Button
        compact={true}
        key={'left'}
        icon="skip-backward"
        color={theme.colors.primary}
        onPress={() => {
          props.paginar(props.meta.current_page - 1);
        }}
      />,
    );
  }

  if (props.meta.current_page < props.meta.last_page) {
    btnSiguiente.push(
      <Button
        mode="text"
        compact={true}
        color={theme.colors.primary}
        key={'left'}
        icon="skip-forward"
        onPress={() => {
          props.paginar(props.meta.current_page + 1);
        }}
      />,
    );
    // btnSiguiente = (
    //   <Pressable
    //     onClick={props.onclick}
    //     data-id={props.meta.current_page + 1}
    //     title={'Siguiente'}
    //     style={[style.btnpagination]} // className={'btn-pagination icon-next'}
    //   />
    // );
  }

  let paginas = [];
  for (let i = paginaInicial; i <= paginaFinal; i++) {
    let active = '';
    if (i === props.meta.current_page) {
      active = 'page-active';
    }
    paginas.push(
      <Button
        mode="text"
        compact={true}
        key={i}
        color={!active?theme.colors.primary:theme.colors.blanco}
        onPress={() => {
          props.paginar(i);
        }}
        style={[style.numberpage, active? style.pageactive : {}]}>
        {i}
      </Button>,
    );
  }
  if (props.meta.total > 6) {
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
