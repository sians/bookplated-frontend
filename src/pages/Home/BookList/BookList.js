import React from 'react';

import BookThumb from '../../../components/BookThumb/BookThumb'

function BookList({ books }) {
    console.log(Object.keys(books))

    return (
        <div>
            <div className="book-list">
                {books && Object.entries(books).map(entry => (
                    // book.read &&
                        <BookThumb book={entry[1]} />
                    ))
                }
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default BookList;

