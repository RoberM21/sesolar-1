/*
 *
 * EditarCliente reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_CLIENT_SUCCESS,
  GET_CLIENT_FAIL,
} from './constants';

const initialState = fromJS({
  snackbar: {
    open: false,
    text: '',
  },
});

function editarClienteReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_CLIENT_SUCCESS:
      return state.set('snackbar', action.message);
    case GET_CLIENT_FAIL:
      return state.set('snackbar', action.error);
    default:
      return state;
  }
}

export default editarClienteReducer;
