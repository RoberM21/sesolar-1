import { createSelector } from 'reselect';

/**
 * Direct selector to the cotizaciones state domain
 */
const selectCotizacionesDomain = () => (state) => state.get('cotizaciones');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Cotizaciones
 */

const makeSelectCotizaciones = () => createSelector(
  selectCotizacionesDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCotizaciones;
export {
  selectCotizacionesDomain,
};
