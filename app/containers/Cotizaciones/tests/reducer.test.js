
import { fromJS } from 'immutable';
import cotizacionesReducer from '../reducer';

describe('cotizacionesReducer', () => {
  it('returns the initial state', () => {
    expect(cotizacionesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
