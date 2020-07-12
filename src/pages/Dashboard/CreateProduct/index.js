import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

export default function CreateProduct() {
  return <Container />;
}

CreateProduct.navigationOptions = ({ navigation }) => ({
  title: 'Inserir Produto',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ListProduct');
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
