
import { fromJS } from 'immutable';
import detalleSeguimientoReducer from '../reducer';

describe('detalleSeguimientoReducer', () => {
  it('returns the initial state', () => {
    expect(detalleSeguimientoReducer(undefined, {})).toEqual(fromJS({}));
  });
});
