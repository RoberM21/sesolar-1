import { createSelector } from 'reselect';

/**
 * Direct selector to the nuevoCliente state domain
 */
const selectNuevoClienteDomain = () => (state) => state.get('nuevoCliente');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NuevoCliente
 */

const makeSelectNuevoCliente = () => createSelector(
  selectNuevoClienteDomain(),
  (substate) => substate.toJS()
);

export default makeSelectNuevoCliente;
export {
  selectNuevoClienteDomain,
};
