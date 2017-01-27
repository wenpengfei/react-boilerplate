/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import { connect } from 'react-redux'
import { compose, withContext, getContext, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'

import { makeSelectLoading } from 'containers/App/selectors'
import { selectUsername } from './selectors'
import * as actions from './actions'
import ImmutableForm from './immutableForm'

const HomePage = () => (
  <div>
    <ImmutableForm />
  </div>
)

// HomePage.propTypes = {
//   onChangeUsernameCreator: React.PropTypes.string,
// }

const mapStateToProps = createStructuredSelector({
  username: selectUsername(),
  loading: makeSelectLoading(),
})

export default compose(
  connect(mapStateToProps, dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  })),
  withContext({
    actions: React.PropTypes.object.isRequired,
  }, props => ({
    actions: props.actions,
  })),
  getContext({
    actions: React.PropTypes.object.isRequired,
  }),
  withHandlers({
    onChangeUsernameCreator: props => event => {
      props.actions.changeUsername(event.target.value)
    },
  }),
)(HomePage)
