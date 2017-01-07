import { createReducer } from 'redux-act'
import { fromJS } from 'immutable'
import { setLoading } from './actions'

const initialState = fromJS({
  loading: false,
  currentUser: false,
})

export default createReducer({
  [setLoading]: (state, payload) => {
    return state.set('loading', payload)
  },
}, initialState)
