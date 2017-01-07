/**
 * The global state selectors
 */

import { createSelector } from 'reselect'

const selectGlobal = () => state => state.get('global')

const selectLoading = () => createSelector(
  selectGlobal(),
  globalState => globalState.get('loading')
)

const selectLocationState = () => {
  let prevRoutingState
  let prevRoutingStateJS

  return state => {
    const routingState = state.get('route') // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState
      prevRoutingStateJS = routingState.toJS()
    }

    return prevRoutingStateJS
  }
}
export {
  selectGlobal,
  selectLoading,
  selectLocationState,
}
