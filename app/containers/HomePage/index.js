/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectUsername } from './selectors'
import { selectLoading } from 'containers/App/selectors'

import { bindActionCreators } from 'redux'
import { compose, withContext, getContext, withHandlers } from 'recompose'
import * as actions from './actions'
import ImmutableForm from '../../Forms/ImmutableForm'

const HomePage = () => {
  return (
    <div>
      <ImmutableForm />
    </div>
  )
}

// HomePage.propTypes = {
//   onChangeUsernameCreator: React.PropTypes.string,
// }

const mapStateToProps = createStructuredSelector({
  username: selectUsername(),
  loading: selectLoading(),
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
