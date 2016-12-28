/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import H2 from 'components/H2';
import Input from './Input';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import RepoListItem from 'containers/RepoListItem';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
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
};

// export function mapDispatchToProps(dispatch) {
//   return {
//     onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
//     onSubmitForm: (evt) => {
//       if (evt !== undefined && evt.preventDefault) evt.preventDefault();
//       dispatch(loadRepos());
//     },
//   };
// }

const mapStateToProps = createStructuredSelector({
  repos: selectRepos(),
  username: selectUsername(),
  loading: selectLoading(),
  error: selectError(),
});

// Wrap the component to inject dispatch and state into it
// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
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
