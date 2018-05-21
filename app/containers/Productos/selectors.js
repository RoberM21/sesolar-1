import { createSelector } from 'reselect';

/**
 * Direct selector to the productos state domain
 */
const selectProductosDomain = () => (state) => state.get('productos');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Productos
 */

const makeSelectProductos = () => createSelector(
  selectProductosDomain(),
  (substate) => substate.toJS()
);

export default makeSelectProductos;
export {
  selectProductosDomain,
};
