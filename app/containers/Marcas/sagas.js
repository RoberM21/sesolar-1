import { call, put, fork, take, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  getBrands,
} from './api';
import {
  getBrandsSuccess,
  getBrandsFail,
} from './actions';
import messages from './messages';

export function* watchGetBrands() {
  try {
    const brands = yield call(getBrands);
    yield put(getBrandsSuccess(brands));
  } catch (e) {
    yield put(getBrandsFail(messages.error));
  }
}

export function* defaultSaga() {
  const watcher = yield [
    fork(watchGetBrands),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
