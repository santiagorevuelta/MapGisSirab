import React from "react";
import {Image} from 'react-native';

export default function ImageRender({style,url}) {
    const [imageError, setImageError] = React.useState(false);
    return (
        <Image
            style={style}
            source={imageError?require('../../../assets/imagen.png'):{uri: url}}
            onError={()=>{
                setImageError(true);
            }}
        />
    )
}