import { call, put, take, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { browserHistory } from 'react-router';
import {
  saveProject,
} from './api';
import {
  saveProjectSuccess,
  saveProjectFail,
} from './actions';
import messages from './messages';
import { SAVE_PROJECT_REQUEST } from './constants';

export function* watchSaveProject(action) {
  try {
    yield call(saveProject, action.body);
    yield put(saveProjectSuccess(messages.success));
    yield put(browserHistory.push('/proyectos'));
  } catch (e) {
    yield put(saveProjectFail(messages.error));
  }
}

export function* defaultSaga() {
  const watcher = yield [
    takeLatest(SAVE_PROJECT_REQUEST, watchSaveProject),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
