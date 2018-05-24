import { call, put, take, cancel, fork, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { browserHistory } from 'react-router';
import {
  getBrands,
  newProduct,
} from './api';
import {
  getBrandsSuccess,
  getBrandsFail,
  saveProductSuccess,
  saveProductFail,
} from './actions';
import messages from './messages';
import { GET_PRODUCT_REQUEST } from './constants';

export function* watchGetBrands() {
  try {
    const brands = yield call(getBrands);
    yield put(getBrandsSuccess(brands));
  } catch (e) {
    yield put(getBrandsFail(messages.error));
  }
}

export function* watchNewProduct(action) {
  try {
    yield call(newProduct, action.body);
    yield put(saveProductSuccess(messages.success));
    browserHistory.push('/productos');
  } catch (e) {
    yield put(saveProductFail(messages.errSave));
  }
}


export function* defaultSaga() {
  const watcher = yield [
    fork(watchGetBrands),
    takeLatest(GET_PRODUCT_REQUEST, watchNewProduct),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
