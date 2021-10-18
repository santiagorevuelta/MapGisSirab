import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {theme} from '../../core/theme';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export default props => {
  return (
    <View style={{paddingHorizontal: '5%'}}>
      <Text style={[theme.textos.Label, styles.txtRes]}>
        Resultado de la búsqueda
      </Text>
      <ScrollView horizontal>
        <Mycard />
      </ScrollView>
    </View>
  );
};

function Mycard() {
  let data = [{}, {}, {}, {}, {}, {}];
  return data.map((item, index) => (
    <Card key={'card' + index}>
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
    </Card>
  ));
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.blanco,
    color: theme.colors.secondary,
    flexDirection: 'column',
  },
  txtRes: {
    fontSize: responsiveFontSize(1.8),
  },
});
