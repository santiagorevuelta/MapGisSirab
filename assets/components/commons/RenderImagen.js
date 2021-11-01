import React from "react";
import {Card} from 'react-native-paper';


export default function ImageRender(props) {
  const [imageError, setImageError] = React.useState(false);
  return (
    <Card.Cover
      style={props.style}
      source={imageError?require('../../assets/imagen.png'):{uri: props.url}}
      onError={()=>{
        setImageError(true);
      }}
    />
  )
}

