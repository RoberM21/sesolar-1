/*
 *
 * Productos reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  OPEN_DELETE_DIALOG,
  SET_SNACKBAR_STATE,
  SET_LOADING,
  GET_DELETE_SUCCESS,
  GET_DELETE_FAIL,
  GET_PRODUCTS_SUCCESS,
} from './constants';

const initialState = fromJS({
  products: [
    {
      name: 'Producto 01',
      description: 'Marca economica',
      cost: 250,
      brands: {
        name: 'Marca economica',
      },
      id: 1,
    },
    {
      name: 'Producto 01',
      description: 'Marca economica',
      cost: 250,
      brands: {
        name: 'Marca economica',
      },
    },
  ],
  loadingProducts: false,
  loading: false,
  snackbar: {
    open: false,
    text: '',
  },
  showDeleteModal: false,
  subLoading: false,
});

function productosReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case OPEN_DELETE_DIALOG:
      return state
        .set('snackbar', { open: false, text: '' })
        .set('showDeleteModal', action.open);
    case GET_PRODUCTS_SUCCESS:
      return state
        .set('products', action.products);
    case GET_DELETE_SUCCESS:
      return state
        .set('showDeleteModal', false)
        .set('snackbar', { open: true, text: action.message });
    case GET_DELETE_FAIL:
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
    case SET_LOADING:
      return initialState;
    default:
      return state;
  }
}

export default productosReducer;
