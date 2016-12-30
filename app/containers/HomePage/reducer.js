import { createReducer } from 'redux-act'
import { fromJS } from 'immutable'
import { changeUsername } from './actions'

const initialState = fromJS({
  username: 'wenpengfei',
  username2: 'wenpengfei',
})

export default createReducer({
  [changeUsername]: (state, payload) => {
    return state.set('username', payload.replace(/@/gi, ''))
                .set('username2', '-')
  },
}, initialState)
