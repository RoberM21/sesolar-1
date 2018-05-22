import { createSelector } from 'reselect';

/**
 * Direct selector to the editarMarca state domain
 */
const selectEditarMarcaDomain = () => (state) => state.get('editarMarca');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EditarMarca
 */

const makeSelectEditarMarca = () => createSelector(
  selectEditarMarcaDomain(),
  (substate) => substate.toJS()
);

export default makeSelectEditarMarca;
export {
  selectEditarMarcaDomain,
};
