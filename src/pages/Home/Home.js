import React from 'react';
import { Link } from 'react-router-dom'

import BookList from './BookList/BookList'

function Home({ }) {
    const books = [
        {
            id: 1,
            coverUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1446876799l/6759.jpg",
            title: "Infinite Jest",
            read: new Date,
            owned: true
        },
        {
            id: 2,
            coverUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388854217l/6751.jpg",
            title: "Consider The Lobster",
            read: null,
            owned: true
        }        
    ]    

    return (
        <div className="main-content">
            <div className="nav-test">
                <h4>Home page</h4>
                <Link to={{pathname: '/book/1'}}>Book</Link>
            </div>

            <div className="home-content">
                <BookList books={books} />
            </div>
        </div>
    );
}

export default Home;

