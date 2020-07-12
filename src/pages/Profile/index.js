import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import {
  Container,
  Title,
  Separator,
  Form,
  FormInput,
  SubmitButton,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const [active, setActive] = useState(profile.active);
  const [name] = useState(profile.name);
  const [email] = useState(profile.email);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        active,
      })
    );
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <Title>Meu perfil</Title>

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            value={name}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            value={email}
          />

          <Separator />

          <FormInput
            icon="lock-outline"
            placeholder={
              !profile.active
                ? 'Insira o código para ativa sua conta'
                : 'Conta Ativada'
            }
            returnKeyType="send"
            value={active}
            onChangeText={setActive}
          />

          {!profile.active && (
            <SubmitButton onPress={handleSubmit}>Ativar Conta</SubmitButton>
          )}
          <LogoutButton onPress={handleLogout}>Sair</LogoutButton>
        </Form>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
