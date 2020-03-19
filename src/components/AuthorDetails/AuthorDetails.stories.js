import React from 'react';
import { action } from '@storybook/addon-actions';

import AuthorDetails from '../AuthorDetails/AuthorDetails';

export default {
  component: AuthorDetails,
  title: 'AuthorDetails',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const defaultData = {
  fullName: 'David Foster Wallace',
  birthYear: 1962,
  deathYear: 2008,
  born: "California, USA",
  books: ["Infinite Jest", "Consider The Lobster", "The Pale King"]
};

export const noBooksData = {
    fullName: 'David Foster Wallace',
    birthYear: 1962,
    deathYear: 2008,
    born: "California, USA",
    books: []
};

export const lotsaBooksData = {
    fullName: 'David Foster Wallace',
    birthYear: 1962,
    deathYear: 2008,
    born: "California, USA",
    books: ["Infinite Jest", "Consider The Lobster", "The Pale King", "The Broom of The System", "Oblivion", "Brief Interviews With Hideous Men"]
};

export const Default = () => <AuthorDetails author={{ ...defaultData }}/>;

export const NoBooks = () => (
    <AuthorDetails author={{ ...noBooksData }} />
);

export const LotsaBooks = () => (
    <AuthorDetails author={{ ...lotsaBooksData }} />
);