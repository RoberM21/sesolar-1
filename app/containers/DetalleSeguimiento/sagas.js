import { call, put, take, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  getFile,
} from './api';
import {
  getPhotoSuccess,
  getPhotoFail,
} from './actions';
import messages from './messages';
import { GET_REQUEST_PHOTO } from './constants';

export function* watchGetFiles(action) {
  try {
    const { name, container } = action;
    const file = yield call(getFile, name, container);
    console.log('------------------------------------');
    console.log('file', file);
    console.log('------------------------------------');
    yield put(getPhotoSuccess(file, messages.success));
  } catch (e) {
    yield put(getPhotoFail(messages.error));
  }
}

export function* defaultSaga() {
  const watcher = yield [
    takeLatest(GET_REQUEST_PHOTO, watchGetFiles),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
