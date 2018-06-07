
import { fromJS } from 'immutable';
import agregarProspectoReducer from '../reducer';

describe('agregarProspectoReducer', () => {
  it('returns the initial state', () => {
    expect(agregarProspectoReducer(undefined, {})).toEqual(fromJS({}));
  });
});
