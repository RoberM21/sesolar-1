/*
 *
 * Proyectos actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getProjectsSuccess(projects) {
  return {
    type: GET_PROJECTS_SUCCESS,
    projects,
  };
}

export function getProjectsFail(error) {
  return {
    type: GET_PROJECTS_FAIL,
    error,
  };
}

