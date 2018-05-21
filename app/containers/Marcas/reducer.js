/*
 *
 * Marcas reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_FAIL,
  SET_SNACKBAR_STATE,
  OPEN_DELETE_DIALOG,
  SET_LOADING,
  GET_DELETE_SUCCESS,
  GET_DELETE_FAIL,
} from './constants';

const initialState = fromJS({
  brand: [],
  loadingBrands: false,
  snackbar: {
    open: false,
    text: '',
  },
  loading: false,
  showDeleteModal: false,
  count: 0,
  subLoading: false,
});

function marcasReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_BRANDS_SUCCESS:
      return state
        .set('brands', action.brands);
    case SET_LOADING:
      return initialState;
    case GET_BRANDS_FAIL:
      return state
        .set('snackbar', { open: true, text: action.error });
    case OPEN_DELETE_DIALOG:
      return state
        .set('snackbar', { open: false, text: '' })
        .set('showDeleteModal', action.open);
    case SET_SNACKBAR_STATE: {
      const { open, text } = action;
      const snackbarState = {
        open,
        text,
      };
      return state.set('snackbar', snackbarState);
    }
    case GET_DELETE_SUCCESS:
      return state
        .set('showDeleteModal', false)
        .set('snackbar', { open: true, text: action.message });
    case GET_DELETE_FAIL:
      return state
        .set('snackbar', { open: true, text: action.error });
    default:
      return state;
  }
}

export default marcasReducer;
