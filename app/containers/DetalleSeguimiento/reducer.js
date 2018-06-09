/*
 *
 * DetalleSeguimiento reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
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
});

function detalleSeguimientoReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default detalleSeguimientoReducer;
