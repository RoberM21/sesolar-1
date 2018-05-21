
import { fromJS } from 'immutable';
import marcasReducer from '../reducer';

describe('marcasReducer', () => {
  it('returns the initial state', () => {
    expect(marcasReducer(undefined, {})).toEqual(fromJS({}));
  });
});
