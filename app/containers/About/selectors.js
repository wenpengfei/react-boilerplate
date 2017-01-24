import { createSelector } from 'reselect';

/**
 * Direct selector to the about state domain
 */
const selectAboutDomain = () => (state) => state.get('about');

/**
 * Other specific selectors
 */


/**
 * Default selector used by About
 */

const makeSelectAbout = () => createSelector(
  selectAboutDomain(),
  (substate) => substate.toJS()
);

export default makeSelectAbout;
export {
  selectAboutDomain,
};
