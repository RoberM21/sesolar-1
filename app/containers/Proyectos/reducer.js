/*
 *
 * Proyectos reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_PROJECTS_FAIL,
  GET_PROJECTS_SUCCESS,
} from './constants';

const initialState = fromJS({
  projects: [],
  loadingProject: false,
  loading: false,
  snackbar: {
    open: false,
    text: '',
  },
  showDeleteModal: false,
  subLoading: false,
});

function proyectosReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_PROJECTS_SUCCESS:
      return state
        .set('projects', action.projects);
    case GET_PROJECTS_FAIL:
      return state
        .set('snackbar', { open: true, text: action.error });
    default:
      return state;
  }
}

export default proyectosReducer;
