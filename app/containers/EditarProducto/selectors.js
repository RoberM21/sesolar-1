import { createSelector } from 'reselect';

/**
 * Direct selector to the editarProducto state domain
 */
const selectEditarProductoDomain = () => (state) => state.get('editarProducto');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EditarProducto
 */

const makeSelectEditarProducto = () => createSelector(
  selectEditarProductoDomain(),
  (substate) => substate.toJS()
);

export default makeSelectEditarProducto;
export {
  selectEditarProductoDomain,
};
