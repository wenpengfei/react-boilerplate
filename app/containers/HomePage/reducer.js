import { createReducer } from 'redux-act';
import { changeUsername } from './actions';
import { combineReducers } from 'redux-immutable';

export const username = createReducer({
  [changeUsername]: (state, payload) => payload,
}, 'wenpengfei');

export default combineReducers({
  username,
});
