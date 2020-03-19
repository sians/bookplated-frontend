import React, { useState } from 'react';
import PropTypes from 'prop-types';


export default function Tab({ activeTab, label, onClick }) {

    const className = (activeTab === label) ? 'tab-list-item tab-list-active' : 'tab-list-item';


    return (
      <li
        className={className}
        onClick={() => onClick(label)}>
            {label}
      </li>

  );
}

Tab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired, 
  };