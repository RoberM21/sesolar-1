import { createSelector } from 'reselect';

/**
 * Direct selector to the editarCliente state domain
 */
const selectEditarClienteDomain = () => (state) => state.get('editarCliente');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EditarCliente
 */

const makeSelectEditarCliente = () => createSelector(
  selectEditarClienteDomain(),
  (substate) => substate.toJS()
);

export default makeSelectEditarCliente;
export {
  selectEditarClienteDomain,
};
