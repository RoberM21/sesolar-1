import { call, put, take, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { browserHistory } from 'react-router';
import {
  newBrand,
} from './api';
import {
  saveBrandSuccess,
  saveBrandFail,
} from './actions';
import messages from './messages';
import { GET_BRAND_REQUEST } from './constants';

export function* watchNewBrand(action) {
  try {
    yield call(newBrand, action.name);
    yield put(saveBrandSuccess(messages.success));
    browserHistory.push('/marcas');
  } catch (e) {
    yield put(saveBrandFail(messages.error));
  }
}


export function* defaultSaga() {
  const watcher = yield [
    takeLatest(GET_BRAND_REQUEST, watchNewBrand),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
