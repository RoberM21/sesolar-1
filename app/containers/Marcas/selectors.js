import { createSelector } from 'reselect';

/**
 * Direct selector to the marcas state domain
 */
const selectMarcasDomain = () => (state) => state.get('marcas');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Marcas
 */

const makeSelectMarcas = () => createSelector(
  selectMarcasDomain(),
  (substate) => substate.toJS()
);

export default makeSelectMarcas;
export {
  selectMarcasDomain,
};
