import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import { Container, Form, Label, FormInput, SubmitButton } from './styles';

import api from '~/services/api';

export default function EditProduct({ navigation }) {
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [qty, setQty] = useState('');

  async function handleUpdateProduct() {
    await api.post('product', {});

    navigation.navigate('Dashboard');
  }

  useEffect(() => {
    async function loadProduct() {
      const product = navigation.getParam('product');

      setCode(product.code);
      setDescription(product.description);
      setPrice(product.price);
      setQty(product.qty);
    }

    loadProduct();
  }, [navigation]);

  return (
    <Background>
      <Container>
        <Form>
          <Label>Código:</Label>
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            value={code}
            onChangeText={setCode}
          />
          <Label>Descrição:</Label>
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            value={description}
            onChangeText={setDescription}
          />
          <Label>Valor:</Label>
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            value={price}
            onChangeText={setPrice}
          />
          <Label>Quantidade:</Label>
          <FormInput value={qty} onChangeText={setQty} />
          <SubmitButton onPress={handleUpdateProduct}>
            Atualizar Produto
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}

EditProduct.navigationOptions = ({ navigation }) => ({
  title: 'Editar Produto',
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
