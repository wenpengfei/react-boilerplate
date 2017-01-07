/*
 *
 * LanguageProvider reducer
 *
 */
import { createReducer } from 'redux-act'
import { fromJS } from 'immutable'
import { changeLocale } from './actions'

const initialState = fromJS({
  locale: 'en',
})

export default createReducer({
  [changeLocale]: (state, payload) => {
    return state.set('locale', payload)
  },
}, initialState)

