import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
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
} from './styles';

export default function Product({ data }) {
  return (
    <Container>
      <Left>
        <Info>
          <Description>{data.description}</Description>
          <ProductInfo>
            <Code>Código: {data.code}</Code>
            <Qty>Qtd: {data.qty}</Qty>
            <Price>Valor: {data.price}</Price>
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
    </Container>
  );
}
