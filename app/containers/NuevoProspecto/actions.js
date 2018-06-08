/*
 *
 * NuevoProspecto actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_CLIENTS_REQUEST,
  GET_CLIENTS_SUCCESS,
  GET_CLIENTS_FAIL,
  GET_PROSPECT_REQUEST,
  SAVE_PROSPECT_SUCCESS,
  SAVE_PROSPECT_FAIL,
  SAVE_VALUES,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getClientsRequest() {
  return {
    type: GET_CLIENTS_REQUEST,
  };
}


export function getClientsSuccess(clients) {
  return {
    type: GET_CLIENTS_SUCCESS,
    clients,
  };
}


export function getClientsFail(error) {
  return {
    type: GET_CLIENTS_FAIL,
    error,
  };
}

export function getProspectRequest(body) {
  return {
    type: GET_PROSPECT_REQUEST,
    body,
  };
}


export function saveProspectSuccess(message) {
  return {
    type: SAVE_PROSPECT_SUCCESS,
    message,
  };
}


export function saveProspectFail(error) {
  return {
    type: SAVE_PROSPECT_FAIL,
    error,
  };
}

export function saveValues(body) {
  return {
    type: SAVE_VALUES,
    body,
  };
}
