
import { fromJS } from 'immutable';
import agregarProyectoReducer from '../reducer';

describe('agregarProyectoReducer', () => {
  it('returns the initial state', () => {
    expect(agregarProyectoReducer(undefined, {})).toEqual(fromJS({}));
  });
});
