import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { active, ...rest } = payload.data;

    const profile = { active };

    const response = yield call(api.put, 'user', profile);

    Alert.alert('Sucesso', 'Conta ativada com sucesso');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert('Falha ao ativar conta', 'Verifique sue código de ativação');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
