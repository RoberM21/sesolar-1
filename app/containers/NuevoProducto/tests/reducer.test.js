
import { fromJS } from 'immutable';
import nuevoProductoReducer from '../reducer';

describe('nuevoProductoReducer', () => {
  it('returns the initial state', () => {
    expect(nuevoProductoReducer(undefined, {})).toEqual(fromJS({}));
  });
});
