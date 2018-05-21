
import { fromJS } from 'immutable';
import nuevoClienteReducer from '../reducer';

describe('nuevoClienteReducer', () => {
  it('returns the initial state', () => {
    expect(nuevoClienteReducer(undefined, {})).toEqual(fromJS({}));
  });
});
