
import { fromJS } from 'immutable';
import nuevaMarcaReducer from '../reducer';

describe('nuevaMarcaReducer', () => {
  it('returns the initial state', () => {
    expect(nuevaMarcaReducer(undefined, {})).toEqual(fromJS({}));
  });
});
