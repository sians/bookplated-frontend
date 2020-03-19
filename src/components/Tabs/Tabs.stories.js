import React from 'react';
import { action } from '@storybook/addon-actions';

import Tabs from '../Tabs/Tabs';

export default {
  component: Tabs,
  title: 'Tabs',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const actionsData = {
    onClick: action('onClick'),
}

export const childrenData = [
    {
        "label": "Biography",
        "data": ["this would be some text probably"],
    },
    {
        "label": "Quotes",
        "data": ["1", "2", "3"],
    },
    {
        "label": "Notes",
        "data": ["1", "2", "3"],
    }
]

export const FirstTabActive = () => <Tabs children={childrenData} {...actionsData}/>;

// export const LastTabActive = () => <Tabs activeTab="Notes" {...actionsData}/>;
