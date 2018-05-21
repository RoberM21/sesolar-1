/*
 *
 * Clientes reducer
 *
 */

import { fromJS, List } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  OPEN_STORE_DIALOG,
  SET_LOADING,
  GET_DELETE_SUCCESS,
  GET_DELETE_FAIL,
} from './constants';

const initialState = fromJS({
  users: [],
  loadingUsers: true,
  snackbar: {
    open: false,
    text: '',
  },
  loading: false,
  showStoreModal: false,
  count: 0,
  subLoading: false,
});

function clientesReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_LOADING:
      return initialState;
    case GET_USERS_SUCCESS: {
      const data = action.users;
      return state
        .set('snackbar', { open: false, text: '' })
        .set('loadingUsers', false)
        .set('loading', false)
        .set('subLoading', false)
        .set('users', List.of(...data));
    }
    case GET_USERS_FAIL: {
      const snackbarState = {
        open: true,
        text: action.error.message,
      };
      return state
        .set('snackbar', snackbarState)
        .set('loadingUsers', false);
    }
    case OPEN_STORE_DIALOG:
      return state
        .set('snackbar', { open: false, text: '' })
        .set('showStoreModal', action.open);
    case GET_DELETE_SUCCESS:
      return state
        .set('showStoreModal', false)
        .set('snackbar', { open: true, text: action.message });
    case GET_DELETE_FAIL:
      return state
        .set('snackbar', { open: true, text: action.error });
    default:
      return state;
  }
}

export default clientesReducer;
