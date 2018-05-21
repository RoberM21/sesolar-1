
import { fromJS } from 'immutable';
import proyectosReducer from '../reducer';

describe('proyectosReducer', () => {
  it('returns the initial state', () => {
    expect(proyectosReducer(undefined, {})).toEqual(fromJS({}));
  });
});
