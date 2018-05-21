/*
 *
 * Marcas actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_FAIL,
  SET_SNACKBAR_STATE,
  OPEN_DELETE_DIALOG,
  SET_LOADING,
  GET_DELETE_REQUEST,
  GET_DELETE_SUCCESS,
  GET_DELETE_FAIL,
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

export function setLoadingAction() {
  return {
    type: SET_LOADING,
  };
}

export function openDeleteDialog(open) {
  return {
    type: OPEN_DELETE_DIALOG,
    open,
  };
}

export function getDeleteRequest(clientId) {
  return {
    type: GET_DELETE_REQUEST,
    clientId,
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
