import { call, put, fork, take, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  getUsers, deleteClient,
} from './api';
import {
  getUsersSuccess,
  getUsersFail,
  getDeleteSuccess,
  getDeleteFail,
} from './actions';
import messages from './messages';
import { GET_DELETE_REQUEST } from './constants';

export function* watchGetUsers() {
  try {
    const users = yield call(getUsers);
    yield put(getUsersSuccess(users));
  } catch (e) {
    yield put(getUsersFail(e));
  }
}

export function* watchDeleteClient(action) {
  try {
    const clientId = action.clientId;
    yield call(deleteClient, clientId);
    yield put(getDeleteSuccess(messages.success));
    const users = yield call(getUsers);
    yield put(getUsersSuccess(users));
  } catch (e) {
    yield put(getDeleteFail(messages.error));
  }
}

export function* defaultSaga() {
  const watcher = yield [
    fork(watchGetUsers),
    takeLatest(GET_DELETE_REQUEST, watchDeleteClient),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
