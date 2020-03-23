import React from 'react';

import BookThumb from '../../../components/BookThumb/BookThumb'

function BookList({ books }) {

    return (
        <div>
            <div className="book-list">
                {books && books.map(book => (
                    // book.read &&
                        <BookThumb book={book} />
                    ))
                }
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default BookList;

