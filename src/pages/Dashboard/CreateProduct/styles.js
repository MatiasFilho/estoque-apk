import styled from 'styled-components/native';

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
