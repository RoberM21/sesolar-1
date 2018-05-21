import { createSelector } from 'reselect';

/**
 * Direct selector to the agregarProyecto state domain
 */
const selectAgregarProyectoDomain = () => (state) => state.get('agregarProyecto');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AgregarProyecto
 */

const makeSelectAgregarProyecto = () => createSelector(
  selectAgregarProyectoDomain(),
  (substate) => substate.toJS()
);

export default makeSelectAgregarProyecto;
export {
  selectAgregarProyectoDomain,
};
