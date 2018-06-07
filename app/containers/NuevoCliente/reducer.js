/*
 *
 * NuevoCliente reducer
 *
 */
import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  HIDE_ERROR,
  GET_CLIENT_SUCCESS,
  GET_CLIENT_FAIL,
} from './constants';

const initialState = fromJS({
  snackbar: {
    open: false,
    text: '',
  },
});

function nuevoClienteReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case HIDE_ERROR: {
      const snackbarState = {
        open: false,
        text: '',
      };
      return state.set('snackbar', snackbarState);
    }
    case GET_CLIENT_SUCCESS:
      return state
        .set('snackbar', { open: true, text: action.message });
    case GET_CLIENT_FAIL:
      return state
        .set('snackbar', { open: true, text: action.error });
    default:
      return state;
  }
}

export default nuevoClienteReducer;
