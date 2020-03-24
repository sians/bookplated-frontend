import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { actions as bookActions, selectors as bookSelectors } from '../../store/reducers/books'

import BookList from './BookList/BookList'

function Home({ }) {
    const dispatch = useDispatch()
    const books = useSelector(bookSelectors.getBooks)
    const isLoading = useSelector(bookSelectors.getBooksLoading)
    const booksError = useSelector(bookSelectors.getBooksError)

    useEffect(() => {
        dispatch(bookActions.getBooks());
      }, [])

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

