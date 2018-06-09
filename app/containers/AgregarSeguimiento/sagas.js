import { call, put, take, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { browserHistory } from 'react-router';
import {
  updateProspecting,
} from './api';
import {
  updateProspectingsFail,
  updateProspectingsSuccess,
} from './actions';
import messages from './messages';
import { UPDATE_PROSPECTINGS_REQUEST } from './constants';

export function* watchUpdateProspectings(action) {
  try {
    yield call(updateProspecting, action.body);
    yield put(updateProspectingsSuccess(messages.success));
    yield put(browserHistory.push('/prospeccion'));
  } catch (e) {
    yield put(updateProspectingsFail(messages.error));
  }
}

export function* defaultSaga() {
  const watcher = yield [
    takeLatest(UPDATE_PROSPECTINGS_REQUEST, watchUpdateProspectings),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
