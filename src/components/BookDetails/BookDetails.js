import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'

import { faPlus, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import { actions as authorActions, selectors as authorSelectors } from '../../store/reducers/authors'

import Tabs from '../../components/Tabs/Tabs'


export default function BookDetails({ book: {coverUrl, authors, title, published, numPages, isbn, read, owned, blurb } }) {
    const author = useSelector(authorSelectors.getAuthor(authors[0]))

    const tabChildren = [
        {
            "label": "Quotes",
            "data": [
                {
                    text: "God seems to have a kind of laid-back management style I’m not crazy about. I’m pretty much anti-death. God looks by all accounts to be pro-death.",
                    pageNum: 40
                },
                {
                    text: "The anhedonic can still speak about happiness and meaning et al., but she has become incapable of feeling anything in them, of understanding anything about them, of hoping anything about them, or of believing them to exist as anything more than concepts. Everything becomes an outline of the thing. Objects become schemata. The world becomes a map of the world. An anhedonic can navigate, but has no location",
                    pageNum: 693
                },
                {
                    text: "— the soul’s certainty that the day will have to be not traversed but sort of climbed, vertically, and then that going to sleep again at the end of it will be like falling, again, off something tall and sheer.",
                    pageNum: 46
                },
            ]
        },
        {
            "label": "Notes",
            "data": ["1", "2", "3"],
        }        
    ]    

    return (
    <div className="book-details">
        <div className="head-details">
            <h2>{title}</h2>
            <div className="bar">
                <Link to={{pathname: `/author/${author.id}`}}>
                    <span>{author.fullName}</span>
                </Link>
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
        <Tabs children={tabChildren} />
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