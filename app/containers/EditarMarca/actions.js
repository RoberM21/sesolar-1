/*
 *
 * EditarMarca actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_EDIT_REQUEST,
  SAVE_EDIT_SUCCESS,
  SAVE_EDIT_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getEditRequest(body) {
  return {
    type: GET_EDIT_REQUEST,
    body,
  };
}

export function saveEditSuccess(message) {
  return {
    type: SAVE_EDIT_SUCCESS,
    message,
  };
}

export function saveEditFail(error) {
  return {
    type: SAVE_EDIT_FAIL,
    error,
  };
}
