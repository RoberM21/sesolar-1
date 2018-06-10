/*
 *
 * AgregarProyecto reducer
 *
 */

import { fromJS } from 'immutable';
import moment from 'moment';
import { map, range } from 'lodash';
import {
  DEFAULT_ACTION,
  SAVE_PROJECT_SUCCESS,
  SAVE_PROJECT_FAIL,
} from './constants';

const initialState = fromJS({
  dialogYearOptions: {
    options: map(range(moment().year(), 2017), (year, index) => ({ value: index, label: `${year}` })),
    currentValue: 0,
  },
  dialogMonthOptions: {
    options: [
      { value: 0, label: 'Enero' },
      { value: 1, label: 'Febrero' },
      { value: 2, label: 'Marzo' },
      { value: 3, label: 'Abril' },
      { value: 4, label: 'Mayo' },
      { value: 5, label: 'Junio' },
      { value: 6, label: 'Julio' },
      { value: 7, label: 'Agosto' },
      { value: 8, label: 'Septiembre' },
      { value: 9, label: 'Octubre' },
      { value: 10, label: 'Noviembre' },
      { value: 11, label: 'Diciembre' },
    ],
    currentValue: 0,
  },
  dialogDayOptions: {
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 29, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  },
  snackbar: {
    open: false,
    text: '',
  },
});

function agregarProyectoReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SAVE_PROJECT_SUCCESS:
      return state
        .set('snackbar', { open: true, text: action.message });
    case SAVE_PROJECT_FAIL:
      return state
        .set('snackbar', { open: true, text: action.error });
    default:
      return state;
  }
}

export default agregarProyectoReducer;
