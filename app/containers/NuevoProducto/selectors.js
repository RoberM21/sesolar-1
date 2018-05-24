import { createSelector } from 'reselect';

/**
 * Direct selector to the nuevoProducto state domain
 */
const selectNuevoProductoDomain = () => (state) => state.get('nuevoProducto');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NuevoProducto
 */

const makeSelectNuevoProducto = () => createSelector(
  selectNuevoProductoDomain(),
  (substate) => substate.toJS()
);

export default makeSelectNuevoProducto;
export {
  selectNuevoProductoDomain,
};
