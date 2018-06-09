
import { fromJS } from 'immutable';
import agregarSeguimientoReducer from '../reducer';

describe('agregarSeguimientoReducer', () => {
  it('returns the initial state', () => {
    expect(agregarSeguimientoReducer(undefined, {})).toEqual(fromJS({}));
  });
});
