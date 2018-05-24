/*
 *
 * EditarProducto actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_FAIL,
  SET_SNACKBAR_STATE,
  GET_PRODUCT_REQUEST,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAIL,
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

export function setSnackbarState(open, text) {
  return {
    type: SET_SNACKBAR_STATE,
    open,
    text,
  };
}

export function getProductRequest(body) {
  return {
    type: GET_PRODUCT_REQUEST,
    body,
  };
}

export function editProductSuccess(message) {
  return {
    type: EDIT_PRODUCT_SUCCESS,
    message,
  };
}

export function editProductFail(error) {
  return {
    type: EDIT_PRODUCT_FAIL,
    error,
  };
}
