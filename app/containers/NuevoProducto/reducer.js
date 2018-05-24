/*
 *
 * NuevoProducto reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_BRANDS_SUCCESS,
  SET_SNACKBAR_STATE,
  SAVE_PRODUCT_SUCCESS,
  SAVE_PRODUCT_FAIL,
} from './constants';

const initialState = fromJS({
  brands: [],
  snackbar: {
    open: false,
    text: '',
  },
});

function nuevoProductoReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_BRANDS_SUCCESS:
      return state
        .set('brands', action.brands);
    case SAVE_PRODUCT_SUCCESS:
      return state
        .set('snackbar', { open: true, text: action.message });
    case SAVE_PRODUCT_FAIL:
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

export default nuevoProductoReducer;
