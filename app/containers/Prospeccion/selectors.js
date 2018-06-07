import { createSelector } from 'reselect';

/**
 * Direct selector to the prospeccion state domain
 */
const selectProspeccionDomain = () => (state) => state.get('prospeccion');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Prospeccion
 */

const makeSelectProspeccion = () => createSelector(
  selectProspeccionDomain(),
  (substate) => substate.toJS()
);

export default makeSelectProspeccion;
export {
  selectProspeccionDomain,
};
