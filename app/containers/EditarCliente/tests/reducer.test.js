
import { fromJS } from 'immutable';
import editarClienteReducer from '../reducer';

describe('editarClienteReducer', () => {
  it('returns the initial state', () => {
    expect(editarClienteReducer(undefined, {})).toEqual(fromJS({}));
  });
});
