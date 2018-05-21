import { createSelector } from 'reselect';

/**
 * Direct selector to the proyectos state domain
 */
const selectProyectosDomain = () => (state) => state.get('proyectos');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Proyectos
 */

const makeSelectProyectos = () => createSelector(
  selectProyectosDomain(),
  (substate) => substate.toJS()
);

export default makeSelectProyectos;
export {
  selectProyectosDomain,
};
