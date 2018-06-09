import { createSelector } from 'reselect';

/**
 * Direct selector to the detalleSeguimiento state domain
 */
const selectDetalleSeguimientoDomain = () => (state) => state.get('detalleSeguimiento');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DetalleSeguimiento
 */

const makeSelectDetalleSeguimiento = () => createSelector(
  selectDetalleSeguimientoDomain(),
  (substate) => substate.toJS()
);

export default makeSelectDetalleSeguimiento;
export {
  selectDetalleSeguimientoDomain,
};
