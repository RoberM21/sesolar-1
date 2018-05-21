/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  VALIDATE_CORREO_ACTION,
  VALIDATE_PASSWORD_ACTION,
  LOGIN_ACTION,
  LOGIN_ACTION_FAIL,
  SET_SNACKBAR_STATE,
  LOGIN_ACTION_SUCCESS,
} from './constants';

const initialState = fromJS({
  textoCorreo: '',
  textoPass: '',
  errorTextCorreo: '',
  errorTextPass: '',
  correo: '',
  password: '',
  snackbar: {
    open: false,
    text: '',
  },
  loading: false,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case VALIDATE_CORREO_ACTION: {
      const { texto } = action.payload;
      return state.merge({
        errorTextCorreo: action.payload.errorTextCorreo,
        textoCorreo: texto,
      });
    }
    case VALIDATE_PASSWORD_ACTION: {
      const { texto } = action.payload;
      return state.merge({
        errorTextPass: action.payload.errorTextPass,
        textoPass: texto,
      });
    }
    case LOGIN_ACTION: {
      const textoCorreo = state.get('textoCorreo');
      const textoPass = state.get('textoPass');
      const errorTextCorreo = state.get('errorTextCorreo');
      const errorTextPass = state.get('errorTextPass');

      if (!errorTextCorreo && !errorTextPass) {
        return state.merge({
          correo: textoCorreo,
          password: textoPass,
          loading: true,
        });
      }
      return state;
    }
    case LOGIN_ACTION_SUCCESS:
      return state
        .set('textoCorreo', '')
        .set('textoPass', '')
        .set('loading', false);
    case LOGIN_ACTION_FAIL: {
      const snackbarState = {
        open: true,
        text: 'Usuario o contraseña incorrectos.',
      };
      return state
        .set('snackbar', snackbarState)
        .set('loading', false);
    }
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

export default loginReducer;
