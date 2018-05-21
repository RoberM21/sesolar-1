import { createSelector } from 'reselect';

/**
 * Direct selector to the nuevaMarca state domain
 */
const selectNuevaMarcaDomain = () => (state) => state.get('nuevaMarca');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NuevaMarca
 */

const makeSelectNuevaMarca = () => createSelector(
  selectNuevaMarcaDomain(),
  (substate) => substate.toJS()
);

export default makeSelectNuevaMarca;
export {
  selectNuevaMarcaDomain,
};
