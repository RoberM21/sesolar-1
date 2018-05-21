import { createSelector } from 'reselect';

/**
 * Direct selector to the clientes state domain
 */
const selectClientesDomain = () => (state) => state.get('clientes');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Clientes
 */

const makeSelectClientes = () => createSelector(
  selectClientesDomain(),
  (substate) => substate.toJS()
);

export default makeSelectClientes;
export {
  selectClientesDomain,
};
