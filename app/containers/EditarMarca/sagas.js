import { call, put, take, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { browserHistory } from 'react-router';
import {
  editBrand,
} from './api';
import {
  saveEditSuccess,
  saveEditFail,
} from './actions';
import messages from './messages';
import { GET_EDIT_REQUEST } from './constants';

export function* watchEditBrand(action) {
  try {
    yield call(editBrand, action.body);
    browserHistory.push('/marcas');
    yield put(saveEditSuccess(messages.success));
  } catch (e) {
    yield put(saveEditFail(messages.error));
  }
}


export function* defaultSaga() {
  const watcher = yield [
    takeLatest(GET_EDIT_REQUEST, watchEditBrand),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
