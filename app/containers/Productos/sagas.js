import { call, put, take, cancel, takeLatest, fork } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  getProducts,
  deleteProduct,
} from './api';
import {
  getProductsSuccess,
  getProductsFail,
  getDeleteSuccess,
  getDeleteFail,
} from './actions';
import messages from './messages';
import { GET_DELETE_REQUEST } from './constants';

export function* watchGetProducts() {
  try {
    const products = yield call(getProducts);
    yield put(getProductsSuccess(products));
  } catch (e) {
    yield put(getProductsFail(messages.error));
  }
}

export function* watchDeleteProduct(action) {
  try {
    const productId = action.productId;
    yield call(deleteProduct, productId);
    yield put(getDeleteSuccess(messages.successDelete));
    const products = yield call(getProducts);
    yield put(getProductsSuccess(products));
  } catch (e) {
    yield put(getDeleteFail(messages.errorDelete));
  }
}

export function* defaultSaga() {
  const watcher = yield [
    fork(watchGetProducts),
    takeLatest(GET_DELETE_REQUEST, watchDeleteProduct),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
