import { call, put, fork, take, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  getBrands,
  deleteBrand,
} from './api';
import {
  getBrandsSuccess,
  getBrandsFail,
  getDeleteSuccess,
  getDeleteFail,
} from './actions';
import messages from './messages';
import { GET_DELETE_REQUEST } from './constants';

export function* watchGetBrands() {
  try {
    const brands = yield call(getBrands);
    yield put(getBrandsSuccess(brands));
  } catch (e) {
    yield put(getBrandsFail(messages.error));
  }
}

export function* watchDeleteBrand(action) {
  try {
    const brandId = action.brandId;
    yield call(deleteBrand, brandId);
    yield put(getDeleteSuccess(messages.successDelete));
    const brands = yield call(getBrands);
    yield put(getBrandsSuccess(brands));
  } catch (e) {
    yield put(getDeleteFail(messages.errorDelete));
  }
}

export function* defaultSaga() {
  const watcher = yield [
    fork(watchGetBrands),
    takeLatest(GET_DELETE_REQUEST, watchDeleteBrand),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
