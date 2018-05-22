/*
 *
 * EditarMarca reducer
 *
 */

import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  DEFAULT_ACTION,
  SAVE_EDIT_SUCCESS,
  SAVE_EDIT_FAIL,
} from './constants';

const initialState = fromJS({
  snackbar: {
    open: false,
    text: '',
  },
});

function editarMarcaReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SAVE_EDIT_SUCCESS:
      return state
        .set('snackbar', { open: true, text: action.message });
    case SAVE_EDIT_FAIL:
      return state
        .set('snackbar', { open: true, text: action.error });
    case LOCATION_CHANGE:
      return initialState;
    default:
      return state;
  }
}

export default editarMarcaReducer;
