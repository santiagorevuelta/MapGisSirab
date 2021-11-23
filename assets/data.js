import { Text, View } from "react-native";

function TickNotificacion({nNotificaciones}){
  return (
    <View >
      <Text>
        {nNotificaciones}
      </Text>
    </View> );
}

export default (props) =>{
  return (
    <View>
      <TickNotificacion nNotificaciones={} />
      <Text>{props.texto}</Text>
    </View>
  );
};
