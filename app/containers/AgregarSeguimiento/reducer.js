/*
 *
 * AgregarSeguimiento reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  UPDATE_PROSPECTINGS_SUCCESS,
  UPDATE_PROSPECTINGS_FAIL,
} from './constants';

const initialState = fromJS({
  porcentages: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  nameSeguimiento: [
    { value: 1, name: 'Segundo seguimiento' },
    { value: 2, name: 'Tercero seguimiento' },
    { value: 3, name: 'Cuarto seguimiento' },
    { value: 4, name: 'Quinto seguimiento' },
    { value: 5, name: 'Sexto seguimiento' },
    { value: 6, name: 'Septimo seguimiento' },
    { value: 7, name: 'Octavo seguimiento' },
    { value: 8, name: 'Noveno seguimiento' },
    { value: 9, name: 'Decimo seguimiento' },
    { value: 10, name: 'Agregar seguimiento' },
  ],
  snackbar: {
    open: false,
    text: '',
  },
});

function agregarSeguimientoReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case UPDATE_PROSPECTINGS_SUCCESS:
      return state
        .set('snackbar', { open: true, text: action.message });
    case UPDATE_PROSPECTINGS_FAIL:
      return state
        .set('snackbar', { open: true, text: action.error });
    default:
      return state;
  }
}

export default agregarSeguimientoReducer;
