import { createSelector } from 'reselect';

/**
 * Direct selector to the detalleCliente state domain
 */
const selectDetalleClienteDomain = () => (state) => state.get('detalleCliente');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DetalleCliente
 */

const makeSelectDetalleCliente = () => createSelector(
  selectDetalleClienteDomain(),
  (substate) => substate.toJS()
);

export default makeSelectDetalleCliente;
export {
  selectDetalleClienteDomain,
};
