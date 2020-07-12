import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Info = styled.View`
  margin-left: 10px;
`;

export const Description = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

export const ProductInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Code = styled.Text`
  color: #999;
  font-size: 13px;
  margin: 4px 4px 0 0;
`;

export const Qty = styled.Text`
  color: #999;
  font-size: 13px;
  margin: 4px 4px 0 0;
`;

export const Price = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 4px;
`;

export const CtrlQtyProduct = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PlusQtyButton = styled(Button)`
  background: green;
  padding: 15px;
  margin-top: 5px;
`;

export const MinusQtyButton = styled(Button)`
  background: #f64c75;
  padding: 15px;
  margin-top: 5px;
`;
