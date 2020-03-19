import React from 'react';
import { action } from '@storybook/addon-actions';

import Nav from '../Nav/Nav';

export default {
  component: Nav,
  title: 'Nav',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const NavData = {
  title: 'Test Nav',
  state: 'NAV',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const Default = () => <Nav />;

