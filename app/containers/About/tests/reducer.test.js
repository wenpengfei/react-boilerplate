
import { fromJS } from 'immutable';
import aboutReducer from '../reducer';

describe('aboutReducer', () => {
  it('returns the initial state', () => {
    expect(aboutReducer(undefined, {})).toEqual(fromJS({}));
  });
});
