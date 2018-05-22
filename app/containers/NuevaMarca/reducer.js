/*
 *
 * NuevaMarca reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SAVE_BRAND_SUCCESS,
  SAVE_BRAND_FAIL,
  SET_SNACKBAR_STATE,
} from './constants';

const initialState = fromJS({
  snackbar: {
    open: false,
    text: '',
  },
});

function nuevaMarcaReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SAVE_BRAND_SUCCESS:
      return state
        .set('snackbar', { open: true, text: action.message });
    case SAVE_BRAND_FAIL:
      return state
      .set('snackbar', { open: true, text: action.error });
    case SET_SNACKBAR_STATE: {
      const { open, text } = action;
      const snackbarState = {
        open,
        text,
      };
      return state.set('snackbar', snackbarState);
    }
    default:
      return state;
  }
}

export default nuevaMarcaReducer;
