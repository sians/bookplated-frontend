import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { faPlus, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import IconButton from '../IconButton/IconButton';
import BookThumb from '../BookThumb/BookThumb';

export default function AuthorDetails({ author: { fullName, birthYear, deathYear, born, books } }) {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
    <div className="author-details">
        <div className="details">
            <h2>{fullName}</h2>
            <div className="bar">
                <span>{born}</span>
                <span>{birthYear} — {deathYear}</span>
            </div>
            <div></div>
        </div>
        <div className="books">
            {books.length < 1 &&
                <div className="cover">
                    <IconButton faIcon={faPlus} />
                </div>            
            }
            
            { !expanded && books.slice(0,5).map(book => (
                <BookThumb book={book} />
                // <div className="cover">
                // </div>
            ))}

            { expanded && books.map(book => (
                <div className="cover">
                </div>
            ))}
        </div>
        <div className="caret-row">
            {expanded ?
                    <IconButton faIcon={faCaretUp} action={handleExpandClick}/>
                :
                    books.length > 5 &&
                        <IconButton faIcon={faCaretDown} action={handleExpandClick}/>
                }            
        </div>
    </div>
  );
}

AuthorDetails.propTypes = {
    author: PropTypes.shape({
      fullName: PropTypes.string.isRequired,
      birthYear: PropTypes.number,
      deathYear: PropTypes.number,
      born: PropTypes.string,
    }),
  };