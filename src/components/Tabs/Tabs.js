import React, { useState } from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton/IconButton'
import { faPlus, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

import Tab from './Tab/Tab'

export default function Tabs({ children }) {
    const [activeTab, setActiveTab] = useState(children[0].label);

    const handleTabItemClick = (tab) => {
        setActiveTab(tab);
      }

    return (
        <div className="tabs">
            <ol className="tab-list">
            {children.map((child) => {

                return (
                <Tab
                    activeTab={activeTab}
                    key={child.label}
                    label={child.label}
                    onClick={handleTabItemClick}
                />
                );
            })}
            </ol>
            <div className="tab-content">
            {children.map((child) => {
                if (child.label !== activeTab) return undefined;
                return child.data;
            })}
            </div>
      </div>

  );
}

Tabs.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };