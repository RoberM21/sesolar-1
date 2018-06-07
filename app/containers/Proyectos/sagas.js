import { call, put, take, cancel, fork } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  getProjects,
  // deleteProduct,
} from './api';
import {
  getProjectsSuccess,
  getProjectsFail,
  // getDeleteSuccess,
  // getDeleteFail,
} from './actions';
import messages from './messages';
// import { GET_DELETE_REQUEST } from './constants';

export function* watchGetProjects() {
  try {
    const projects = yield call(getProjects);
    yield put(getProjectsSuccess(projects));
  } catch (e) {
    yield put(getProjectsFail(messages.error));
  }
}

// export function* watchDeleteProduct(action) {
//   try {
//     const productId = action.productId;
//     yield call(deleteProduct, productId);
//     yield put(getDeleteSuccess(messages.successDelete));
//     const products = yield call(getProducts);
//     yield put(getProductsSuccess(products));
//   } catch (e) {
//     yield put(getDeleteFail(messages.errorDelete));
//   }
// }

export function* defaultSaga() {
  const watcher = yield [
    fork(watchGetProjects),
    // takeLatest(GET_DELETE_REQUEST, watchDeleteProduct),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
