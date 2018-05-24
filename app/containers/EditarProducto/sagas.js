import { call, put, take, cancel, fork, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { browserHistory } from 'react-router';
import {
  getBrands,
  editProduct,
} from './api';
import {
  getBrandsSuccess,
  getBrandsFail,
  editProductSuccess,
  editProductFail,
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

export function* watchEditProduct(action) {
  try {
    yield call(editProduct, action.body);
    yield put(editProductSuccess(messages.success));
    browserHistory.push('/productos');
  } catch (e) {
    yield put(editProductFail(messages.errEdit));
  }
}


export function* defaultSaga() {
  const watcher = yield [
    fork(watchGetBrands),
    takeLatest(GET_PRODUCT_REQUEST, watchEditProduct),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
