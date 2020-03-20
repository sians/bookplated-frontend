import React from 'react';
import { action } from '@storybook/addon-actions';

import BookDetails from '../BookDetails/BookDetails';

export default {
  component: BookDetails,
  title: 'BookDetails',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const bookDetailsReadData = {
    coverUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1446876799l/6759.jpg",
    title: "Infinite Jest",
    read: new Date,
    owned: true,
    authors: ["David Foster Wallace"],
    blurb: "A gargantuan, mind-altering comedy about the Pursuit of Happiness in America. Set in an addicts' halfway house and a tennis academy, and featuring the most endearingly screwed-up family to come along in recent fiction, Infinite Jest explores essential questions about what entertainment is and why it has come to so dominate our lives; about how our desire for entertainment affects our need to connect with other people; and about what the pleasures we choose say about who we are.",
    published: 1998,
    numPages: 1080,
    isbn: "978-0-316-92004-9"
}

export const bookDetailsUnreadData = {
    coverUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388854217l/6751.jpg",
    title: "Consider The Lobster",
    read: null,
    owned: true,
    authors: ["David Foster Wallace"],
    blurb: "Do lobsters feel pain? Did Franz Kafka have a funny bone? What is John Updike's deal, anyway? And what happens when adult video starlets meet their fans in person? David Foster Wallace answers these questions and more in essays that are also enthralling narrative adventures. Whether covering the three-ring circus of a vicious presidential race, plunging into the wars between dictionary writers, or confronting the World's Largest Lobster Cooker at the annual Maine Lobster Festival, Wallace projects a quality of thought that is uniquely his and a voice as powerful and distinct as any in American letters.",
    published: 2005,
    numPages: 343,
    isbn: "978-0-316-15611-0"
}

export const bookDetailsNoBlurbData = {
    coverUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344270056l/5986375.jpg",
    title: "This Is Water",
    read: null,
    owned: true,
    authors: ["David Foster Wallace"],
    blurb: null,
    published: 2009,
    numPages: 138,
    isbn: "978-0-316-06822-2"
}

export const bookDetailsRead = () => <BookDetails book={bookDetailsReadData}/>;

export const bookDetailsUnread = () => <BookDetails book={bookDetailsUnreadData}/>;

export const bookDetailsNoBlurb = () => <BookDetails book={bookDetailsNoBlurbData}/>;

export const bookDetailsNoCover = () => <BookDetails book={bookDetailsUnreadData}/>;
// export const LastTabActive = () => <BookThumb activeTab="Notes" {...actionsData}/>;
