/*
 *
 * EditarCliente actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_CLIENT_REQUEST,
  GET_CLIENT_SUCCESS,
  GET_CLIENT_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getClientRequest(body) {
  return {
    type: GET_CLIENT_REQUEST,
    body,
  };
}

export function getClientSuccess(success) {
  return {
    type: GET_CLIENT_SUCCESS,
    success,
  };
}

export function getClientFail(error) {
  return {
    type: GET_CLIENT_FAIL,
    error,
  };
}
