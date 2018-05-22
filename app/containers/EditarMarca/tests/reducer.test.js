
import { fromJS } from 'immutable';
import editarMarcaReducer from '../reducer';

describe('editarMarcaReducer', () => {
  it('returns the initial state', () => {
    expect(editarMarcaReducer(undefined, {})).toEqual(fromJS({}));
  });
});
