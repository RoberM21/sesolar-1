/*
 *
 * Prospeccion reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_PROSPECTINGS_SUCCESS,
  GET_PROSPECTINGS_FAIL,
} from './constants';

const initialState = fromJS({
  prospectings: [],
  loadingProspects: true,
  snackbar: {
    open: false,
    text: '',
  },
  loading: false,
  subLoading: false,
  porcentages: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
});

function prospeccionReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_PROSPECTINGS_SUCCESS:
      return state
        .set('prospectings', action.prospectings)
        .set('loadingProspects', false);
    case GET_PROSPECTINGS_FAIL:
      return state
        .set('snackbar', { open: true, text: action.error });
    default:
      return state;
  }
}

export default prospeccionReducer;
