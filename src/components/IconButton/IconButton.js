import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function IconButton({ action, classList, faIcon }) {

  const events = {
    action
  };

  return (
    <a onClick={action} className="icon-button">
        <FontAwesomeIcon className="icon" icon={faIcon}/>
    </a>
  );
}

export default IconButton;

IconButton.propTypes = {
    faIcon: PropTypes.element,
    action: PropTypes.func,
    classList: PropTypes.string
}

