import React from 'react'
import { useSelector } from 'react-redux'

import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { bookThumbUnreadData } from '../../components/BookThumb/BookThumb.stories';

import BookDetails from '../../components/BookDetails/BookDetails'
import Tabs from '../../components/Tabs/Tabs'

import { actions as bookActions, selectors as bookSelectors } from '../../store/reducers/books'


function BookShow({ }) {
    const history = useHistory();
    const handleGoBack = () => {
        history.goBack();
    }

    const id = useParams();

    const book = useSelector(bookSelectors.getBook(id))
    const isLoading = useSelector(bookSelectors.getBookLoading)
    const bookError = useSelector(bookSelectors.getBookError)
    
    return (
        <div className="book-show-container">
            {/* <h4>BookShow page</h4>
            <p>{book.id}</p>
            <Link to={{pathname: '/author'}}>Author</Link>
            <button onClick={handleGoBack}>Go Back</button> */}
            <BookDetails book={book}/>
        </div>
    );
}

export default BookShow;

