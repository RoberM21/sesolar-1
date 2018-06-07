import { call, put, take, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { browserHistory } from 'react-router';
import {
  editClient,
} from './api';
import {
  getClientSuccess,
  getClientFail,
} from './actions';
import messages from './messages';
import { GET_CLIENT_REQUEST } from './constants';

export function* watchEditClient(action) {
  try {
    yield call(editClient, action.body);
    browserHistory.push('/clientes');
    yield put(getClientSuccess(messages.success));
  } catch (e) {
    yield put(getClientFail(messages.error));
  }
}


export function* defaultSaga() {
  const watcher = yield [
    takeLatest(GET_CLIENT_REQUEST, watchEditClient),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
