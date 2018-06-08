/*
 *
 * Prospeccion actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_PROSPECTINGS_REQUEST,
  GET_PROSPECTINGS_SUCCESS,
  GET_PROSPECTINGS_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getProspectingsRequest() {
  return {
    type: GET_PROSPECTINGS_REQUEST,
  };
}

export function getProspectingsSuccess(prospectings) {
  return {
    type: GET_PROSPECTINGS_SUCCESS,
    prospectings,
  };
}

export function getProspectingsFail(error) {
  return {
    type: GET_PROSPECTINGS_FAIL,
    error,
  };
}

