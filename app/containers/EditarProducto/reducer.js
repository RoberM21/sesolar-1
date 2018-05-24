/*
 *
 * EditarProducto reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_BRANDS_SUCCESS,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAIL,
} from './constants';

const initialState = fromJS({
  brands: [],
  snackbar: {
    open: false,
    text: '',
  },
  product: {
    name: 'Producto 01',
    description: 'Marca economica',
    cost: 250,
    brands: {
      name: 'Marca economica',
    },
    id: 1,
  },
});

function editarProductoReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_BRANDS_SUCCESS:
      return state
        .set('brands', action.brands);
    case EDIT_PRODUCT_SUCCESS:
      return state.set('snackbar', action.message);
    case EDIT_PRODUCT_FAIL:
      return state.set('snackbar', action.error);
    default:
      return state;
  }
}

export default editarProductoReducer;
