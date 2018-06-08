import { call, put, take, cancel, fork } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  getProspectings,
} from './api';
import {
  getProspectingsSuccess,
  getProspectingsFail,
} from './actions';
import messages from './messages';

export function* watchGetProspectings() {
  try {
    const prospectings = yield call(getProspectings);
    yield put(getProspectingsSuccess(prospectings));
  } catch (e) {
    yield put(getProspectingsFail(messages.error));
  }
}

export function* defaultSaga() {
  const watcher = yield [
    fork(watchGetProspectings),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
