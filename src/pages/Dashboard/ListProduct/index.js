import React, { useEffect, useState } from 'react';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import {
  Container,
  Title,
  List,
  Product,
  Left,
  Info,
  Description,
  ProductInfo,
  Code,
  Qty,
  Price,
  CtrlQtyProduct,
  PlusQtyButton,
  MinusQtyButton,
  ActionButtonIcon,
} from './styles';

import api from '~/services/api';

export default function ListProduct({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadAppointment() {
      const response = await api.get('product');

      setProducts(response.data.Items.docs);
    }

    loadAppointment();
  }, []);

  return (
    <Background>
      <Container>
        <Title>Lista de Produtos</Title>

        <List
          data={products}
          keyExtractor={item => String(item._id)}
          renderItem={({ item }) => (
            <Product
              onPress={() =>
                navigation.navigate('EditProduct', { product: item })
              }
            >
              <Left>
                <Info>
                  <Description>{item.description}</Description>
                  <ProductInfo>
                    <Code>Código: {item.code}</Code>
                    <Qty>Qtd: {item.qty}</Qty>
                    <Price>Valor: {item.price}</Price>
                  </ProductInfo>
                </Info>
              </Left>

              <CtrlQtyProduct>
                <PlusQtyButton onPress={() => {}}>
                  <Icon name="add" size={20} color="#fff" />
                </PlusQtyButton>
                <MinusQtyButton onPress={() => {}}>
                  <Icon name="remove" size={20} color="#fff" />
                </MinusQtyButton>
              </CtrlQtyProduct>
            </Product>
          )}
        />

        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => {
            navigation.navigate('CreateProduct');
          }}
        />
      </Container>
    </Background>
  );
}

ListProduct.navigationOptions = () => ({
  title: '',
});
