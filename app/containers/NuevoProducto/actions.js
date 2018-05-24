/*
 *
 * NuevoProducto actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_FAIL,
  GET_PRODUCT_REQUEST,
  SAVE_PRODUCT_SUCCESS,
  SAVE_PRODUCT_FAIL,
  SET_SNACKBAR_STATE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getBrandsSuccess(brands) {
  return {
    type: GET_BRANDS_SUCCESS,
    brands,
  };
}

export function getBrandsFail(error) {
  return {
    type: GET_BRANDS_FAIL,
    error,
  };
}

export function getProductRequest(body) {
  return {
    type: GET_PRODUCT_REQUEST,
    body,
  };
}

export function saveProductSuccess(message) {
  return {
    type: SAVE_PRODUCT_SUCCESS,
    message,
  };
}

export function saveProductFail(error) {
  return {
    type: SAVE_PRODUCT_FAIL,
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
