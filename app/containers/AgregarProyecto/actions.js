/*
 *
 * AgregarProyecto actions
 *
 */

import {
  DEFAULT_ACTION,
  SAVE_PROJECT_REQUEST,
  SAVE_PROJECT_SUCCESS,
  SAVE_PROJECT_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function saveProjectRequest(body) {
  return {
    type: SAVE_PROJECT_REQUEST,
    body,
  };
}

export function saveProjectSuccess(message) {
  return {
    type: SAVE_PROJECT_SUCCESS,
    message,
  };
}

export function saveProjectFail(error) {
  return {
    type: SAVE_PROJECT_FAIL,
    error,
  };
}
