
import { fromJS } from 'immutable';
import detalleClienteReducer from '../reducer';

describe('detalleClienteReducer', () => {
  it('returns the initial state', () => {
    expect(detalleClienteReducer(undefined, {})).toEqual(fromJS({}));
  });
});
