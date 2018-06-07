
import { fromJS } from 'immutable';
import prospeccionReducer from '../reducer';

describe('prospeccionReducer', () => {
  it('returns the initial state', () => {
    expect(prospeccionReducer(undefined, {})).toEqual(fromJS({}));
  });
});
