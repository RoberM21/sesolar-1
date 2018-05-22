/*
 *
 * NuevaMarca actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_BRAND_REQUEST,
  SAVE_BRAND_SUCCESS,
  SAVE_BRAND_FAIL,
  SET_SNACKBAR_STATE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getBrandRequest(name) {
  return {
    type: GET_BRAND_REQUEST,
    name,
  };
}

export function saveBrandSuccess(message) {
  return {
    type: SAVE_BRAND_SUCCESS,
    message,
  };
}

export function saveBrandFail(error) {
  return {
    type: SAVE_BRAND_FAIL,
    error,
  };
}

export function setSnackbarState(open, text) {
  return {
    type: SET_SNACKBAR_STATE,
    open,
    text,
  };
}
