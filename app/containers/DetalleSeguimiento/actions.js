/*
 *
 * DetalleSeguimiento actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_REQUEST_PHOTO,
  GET_PHOTO_SUCCESS,
  GET_PHOTO_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getRequestPhoto(name, container) {
  return {
    type: GET_REQUEST_PHOTO,
    name,
    container,
  };
}

export function getPhotoSuccess(message) {
  return {
    type: GET_PHOTO_SUCCESS,
    message,
  };
}

export function getPhotoFail(error) {
  return {
    type: GET_PHOTO_FAIL,
    error,
  };
}
