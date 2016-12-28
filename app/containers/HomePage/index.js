/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Input from './Input';
import { selectUsername } from './selectors';
import { selectRepos, selectLoading, selectError } from 'containers/App/selectors';

import { bindActionCreators } from 'redux';
import { compose, withContext, getContext, withHandlers } from 'recompose';
import * as actions from './actions';

const HomePage = ({ username, onChangeUsernameCreator }) => {
  return (
    <div>
      <Input
        id="username"
        type="text"
        placeholder="mxstbr"
        value={username}
        onChange={onChangeUsernameCreator}
      />
    </div>
  );
};

HomePage.propTypes = {
  onChangeUsernameCreator: React.PropTypes.func,
  username: React.PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  repos: selectRepos(),
  username: selectUsername(),
  loading: selectLoading(),
  error: selectError(),
});

export default compose(
  connect(mapStateToProps, (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  })),
  withContext({
    actions: React.PropTypes.object.isRequired,
  }, (props) => ({
    actions: props.actions,
  })),
  getContext({
    actions: React.PropTypes.object.isRequired,
  }),
  withHandlers({
    onChangeUsernameCreator: (props) => (event) => {
      props.actions.changeUsername(event.target.value);
    },
  }),
)(HomePage);
