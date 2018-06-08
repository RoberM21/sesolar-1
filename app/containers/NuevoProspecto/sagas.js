import { call, put, take, cancel, fork, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { browserHistory } from 'react-router';
import {
  getClients, saveProspect,
} from './api';
import {
  getClientsSuccess,
  getClientsFail,
  saveProspectSuccess,
  saveProspectFail,
} from './actions';
import messages from './messages';
import { GET_PROSPECT_REQUEST } from './constants';

export function* watchGetClients() {
  try {
    const clients = yield call(getClients);
    yield put(getClientsSuccess(clients));
  } catch (e) {
    yield put(getClientsFail(messages.error));
  }
}

export function* watchSaveProspect(action) {
  try {
    const { body } = action;
    yield call(saveProspect, body);
    yield put(saveProspectSuccess(messages.success));
    browserHistory.push('/prospeccion');
  } catch (e) {
    yield put(saveProspectFail(messages.error));
  }
}

export function* defaultSaga() {
  const watcher = yield [
    fork(watchGetClients),
    takeLatest(GET_PROSPECT_REQUEST, watchSaveProspect),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
