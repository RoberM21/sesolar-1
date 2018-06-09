import { createSelector } from 'reselect';

/**
 * Direct selector to the agregarSeguimiento state domain
 */
const selectAgregarSeguimientoDomain = () => (state) => state.get('agregarSeguimiento');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AgregarSeguimiento
 */

const makeSelectAgregarSeguimiento = () => createSelector(
  selectAgregarSeguimientoDomain(),
  (substate) => substate.toJS()
);

export default makeSelectAgregarSeguimiento;
export {
  selectAgregarSeguimientoDomain,
};
