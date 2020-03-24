import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'

import { faPlus, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import { actions as authorActions, selectors as authorSelectors } from '../../store/reducers/authors'

import IconButton from '../IconButton/IconButton';
import BookThumb from '../BookThumb/BookThumb';

export default function BookDetails({ book: {coverUrl, authors, title, published, numPages, isbn, read, owned, blurb } }) {
    const author = useSelector(authorSelectors.getAuthor(authors[0]))


    return (
    <div className="book-details">
        <div className="head-details">
            <h2>{title}</h2>
            <div className="bar">
                <span>{author.fullName}</span>
            </div>
        </div>
        <div className="body-details">
            <div className="cover-image" 
                style={{backgroundImage: `url(${coverUrl})`}}>
            </div>
            <div className="info">
                <ul>
                    <li>
                        <h6>published</h6>
                        <span>{published}</span>
                    </li>
                    <li>
                        <h6>pages</h6>
                        <span>{numPages}</span>
                    </li>
                    <li>
                        <h6>isbn</h6>
                        <span>{isbn}</span>
                    </li>
                    <li>
                        <h6>{read ? 'read' : 'unread'}</h6>
                        <span></span>
                    </li>
                </ul>
            </div>
            <div className="blurb">
                {blurb  && <p>{blurb}</p>}
                {!blurb && 
                    <p className="placeholder-blurb">
                        You haven't written a description or blurb of this book yet! To add some details in your own words, or someone else's, double click.
                    </p>}
            </div>
        </div>
    </div>
  );
}

BookDetails.propTypes = {
    book: PropTypes.shape({
        coverUrl: PropTypes.string,
        title: PropTypes.string.isRequired,
        read: PropTypes.instanceOf(Date),
        owned: PropTypes.bool.isRequired,
        blurb: PropTypes.string.isRequired,
        authors: PropTypes.arrayOf(String).isRequired,
        published: PropTypes.number,
        numPages: PropTypes.number,
        isbn: PropTypes.string
    })
  };