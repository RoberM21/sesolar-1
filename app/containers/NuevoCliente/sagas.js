import { call, put, take, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { browserHistory } from 'react-router';
import {
  newClient,
} from './api';
import {
  getClientSuccess,
  getClientFail,
} from './actions';
import messages from './messages';
import { GET_CLIENT_REQUEST } from './constants';

export function* watchNewClient(action) {
  try {
    yield call(newClient, action.body);
    yield put(getClientSuccess(messages.success));
    browserHistory.push('/clientes');
  } catch (e) {
    yield put(getClientFail(messages.error));
  }
}


export function* defaultSaga() {
  const watcher = yield [
    takeLatest(GET_CLIENT_REQUEST, watchNewClient),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
