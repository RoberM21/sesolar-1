/*
 *
 * DetalleSeguimiento reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_PHOTO_SUCCESS,
  GET_PHOTO_FAIL,
} from './constants';

const initialState = fromJS({
  nameSeguimiento: [
    { value: 0, name: 'Primer seguimiento' },
    { value: 1, name: 'Segundo seguimiento' },
    { value: 2, name: 'Tercer seguimiento' },
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
  image: '',
});

function detalleSeguimientoReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_PHOTO_SUCCESS:
      return state
        .set('image', action.image)
        .set('snackbar', { open: true, text: action.message });
    case GET_PHOTO_FAIL:
      return state
        .set('snackbar', { open: true, text: action.error });
    default:
      return state;
  }
}

export default detalleSeguimientoReducer;
