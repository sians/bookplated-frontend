import React from 'react';
import { action } from '@storybook/addon-actions';

import BookThumb from '../BookThumb/BookThumb';

export default {
  component: BookThumb,
  title: 'BookThumb',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const bookThumbReadData = {
    coverUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1446876799l/6759.jpg",
    title: "Infinite Jest",
    read: new Date,
    owned: true
}

export const bookThumbUnreadData = {
    coverUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388854217l/6751.jpg",
    title: "Consider The Lobster",
    read: null,
    owned: true
}

export const bookThumbRead = () => <BookThumb book={bookThumbReadData}/>;

export const bookThumbUnread = () => <BookThumb book={bookThumbUnreadData}/>;
// export const LastTabActive = () => <BookThumb activeTab="Notes" {...actionsData}/>;
