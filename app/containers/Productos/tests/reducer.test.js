
import { fromJS } from 'immutable';
import productosReducer from '../reducer';

describe('productosReducer', () => {
  it('returns the initial state', () => {
    expect(productosReducer(undefined, {})).toEqual(fromJS({}));
  });
});
