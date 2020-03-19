import React from 'react';
import { action } from '@storybook/addon-actions';

import Tab from '../Tab/Tab';

export default {
  component: Tab,
  title: 'Tab',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const actionsData = {
    onClick: action('onClick'),
}

export const ActiveTab = () => <Tab activeTab="Quotes" label="Quotes" {...actionsData}/>;

export const InactiveTab = () => <Tab activeTab="Notes" label="Quotes" {...actionsData}/>;
