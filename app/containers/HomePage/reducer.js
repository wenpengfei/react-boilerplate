import { createReducer } from 'redux-act'
import { fromJS } from 'immutable'
import { changeUsername } from './actions'

const initialState = fromJS({
  username: 'wenpengfei',
})

export default createReducer({
  [changeUsername]: (state, payload) => (
     state.set('username', payload.replace(/@/gi, ''))
  ),
}, initialState)
