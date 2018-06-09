/*
 *
 * AgregarSeguimiento actions
 *
 */

import {
  DEFAULT_ACTION,
  UPDATE_PROSPECTINGS_REQUEST,
  UPDATE_PROSPECTINGS_SUCCESS,
  UPDATE_PROSPECTINGS_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function updateProspectingsRequest(body) {
  return {
    type: UPDATE_PROSPECTINGS_REQUEST,
    body,
  };
}

export function updateProspectingsSuccess(message) {
  return {
    type: UPDATE_PROSPECTINGS_SUCCESS,
    message,
  };
}

export function updateProspectingsFail(error) {
  return {
    type: UPDATE_PROSPECTINGS_FAIL,
    error,
  };
}

