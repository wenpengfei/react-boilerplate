/**
*
* Buttons
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Buttons() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Buttons.propTypes = {

};

export default Buttons;
