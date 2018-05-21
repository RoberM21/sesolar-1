/*
 *
 * NuevoCliente actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_CLIENT_REQUEST,
  GET_CLIENT_SUCCESS,
  GET_CLIENT_FAIL,
  HIDE_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function hideError() {
  return {
    type: HIDE_ERROR,
  };
}

export function getClientRequest(body) {
  return {
    type: GET_CLIENT_REQUEST,
    body,
  };
}

export function getClientSuccess(message) {
  return {
    type: GET_CLIENT_SUCCESS,
    message,
  };
}

export function getClientFail(error) {
  return {
    type: GET_CLIENT_FAIL,
    error,
  };
}
