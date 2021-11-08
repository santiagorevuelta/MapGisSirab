import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { theme } from "../../../../core/theme";

const optionsPerPage = [2, 3, 4];

export default function ()  {

  const [items, setItems] = useState([]);
  const [swNew, setSwNew] = useState(true);
  if (swNew){
    AsyncStorage.getItem('variables').then(jsonValue => {
      const item = jsonValue != null ? JSON.parse(jsonValue) : {};
      setItems(item);
    });
    setSwNew(!swNew)
  }

  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(items[0]);
  React.useEffect(() => {setPage(0);}, [itemsPerPage]);

  return (
    <DataTable style={{backgroundColor:theme.colors.blanco,height:'100%'}}>
      <DataTable.Header>
        <DataTable.Title>Fecha</DataTable.Title>
        <DataTable.Title numeric>Altura árbol</DataTable.Title>
        <DataTable.Title numeric>Altura copa(m)</DataTable.Title>
        <DataTable.Title numeric>DAP 1</DataTable.Title>
        <DataTable.Title numeric>DAP 2</DataTable.Title>
      </DataTable.Header>
      {items.length >0 && items.map((index,i)=>(
        <DataTable.Row key={i}>
          <DataTable.Cell>{index.fecha_ingreso}</DataTable.Cell>
          <DataTable.Cell numeric>{index.altura}</DataTable.Cell>
          <DataTable.Cell numeric>{index.altura_copa}</DataTable.Cell>
          <DataTable.Cell numeric>{index.dap1}</DataTable.Cell>
          <DataTable.Cell numeric>{index.dap2}</DataTable.Cell>
        </DataTable.Row>
      ))
      }
      {/*<DataTable.Pagination*/}
      {/*  page={page}*/}
      {/*  numberOfPages={items.length/3}*/}
      {/*  onPageChange={(page) => setPage(page)}*/}
      {/*  //label="1-2 of 6"*/}
      {/*  optionsPerPage={optionsPerPage}*/}
      {/*  itemsPerPage={itemsPerPage}*/}
      {/*  setItemsPerPage={setItemsPerPage}*/}
      {/*  showFastPagination*/}
      {/*  optionsLabel={'Rows per page'}*/}
      {/*/>*/}
    </DataTable>
  );
}
