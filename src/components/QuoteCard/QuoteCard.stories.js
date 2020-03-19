import React from 'react';
import { action } from '@storybook/addon-actions';

import QuoteCard from '../QuoteCard/QuoteCard';

export default {
  component: QuoteCard,
  title: 'QuoteCard',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const quoteData = {
    text: "God seems to have a kind of laid-back management style I’m not crazy about. I’m pretty much anti-death. God looks by all accounts to be pro-death.",
    pageNum: 40
}

export const NavData = {
  title: 'Test Quote',
  state: 'QUOTE',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const Default = () => <QuoteCard quote={{ ...quoteData }}/>;

