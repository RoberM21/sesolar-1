/*
 *
 * Productos actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_SNACKBAR_STATE,
  OPEN_DELETE_DIALOG,
  GET_DELETE_REQUEST,
  SET_LOADING,
  GET_DELETE_SUCCESS,
  GET_DELETE_FAIL,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getProductsSuccess(brands) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    brands,
  };
}

export function getProductsFail(error) {
  return {
    type: GET_PRODUCTS_FAIL,
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

export function openDeleteDialog(open) {
  return {
    type: OPEN_DELETE_DIALOG,
    open,
  };
}

export function getDeleteRequest(productId) {
  return {
    type: GET_DELETE_REQUEST,
    productId,
  };
}

export function setLoadingAction() {
  return {
    type: SET_LOADING,
  };
}

export function getDeleteSuccess(message) {
  return {
    type: GET_DELETE_SUCCESS,
    message,
  };
}

export function getDeleteFail(error) {
  return {
    type: GET_DELETE_FAIL,
    error,
  };
}
