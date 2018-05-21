
import { fromJS } from 'immutable';
import clientesReducer from '../reducer';

describe('clientesReducer', () => {
  it('returns the initial state', () => {
    expect(clientesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
