import { createSelector } from 'reselect';

/**
 * Direct selector to the nuevoProspecto state domain
 */
const selectNuevoProspectoDomain = () => (state) => state.get('nuevoProspecto');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NuevoProspecto
 */

const makeSelectNuevoProspecto = () => createSelector(
  selectNuevoProspectoDomain(),
  (substate) => substate.toJS()
);

export default makeSelectNuevoProspecto;
export {
  selectNuevoProspectoDomain,
};
