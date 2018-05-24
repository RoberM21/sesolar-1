
import { fromJS } from 'immutable';
import editarProductoReducer from '../reducer';

describe('editarProductoReducer', () => {
  it('returns the initial state', () => {
    expect(editarProductoReducer(undefined, {})).toEqual(fromJS({}));
  });
});
