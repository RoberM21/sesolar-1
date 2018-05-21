/*
 *
 * Clientes actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  OPEN_STORE_DIALOG,
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

export function getUsersSuccess(users) {
  return {
    type: GET_USERS_SUCCESS,
    users,
  };
}

export function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    error,
  };
}

export function SetLoadingAction() {
  return {
    type: SET_LOADING,
  };
}

export function openStoreDialog(open) {
  return {
    type: OPEN_STORE_DIALOG,
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
