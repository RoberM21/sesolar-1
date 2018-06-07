/*
 *
 * NuevoProspecto reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_CLIENTS_SUCCESS,
  GET_CLIENTS_FAIL,
  SAVE_PROSPECT_SUCCESS,
  SAVE_PROSPECT_FAIL,
} from './constants';
import messages from './messages';

const initialState = fromJS({
  clients: [],
  snackbar: {
    open: false,
    text: '',
  },
  porcentages: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
});

function nuevoProspectoReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_CLIENTS_SUCCESS:
      return state
        .set('clients', action.clients);
    case GET_CLIENTS_FAIL:
      return state
        .set('snackbar', { open: true, text: messages.errorClient });
    case SAVE_PROSPECT_SUCCESS:
      return state
        .set('snackbar', { open: true, text: action.message });
    case SAVE_PROSPECT_FAIL:
      return state
        .set('snackbar', { open: true, text: action.error });
    default:
      return state;
  }
}

export default nuevoProspectoReducer;
