import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faChartBar, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

import IconButton from '../IconButton/IconButton'

function BookThumb({ book: {cover_url, title, read, owned } }) {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseHover = () => { 
        setIsHovering(!isHovering)
    }

    return (
        <div className={`cover ${read ? '' : 'unread'}`}
            style={{backgroundImage: `url(${cover_url})`}}
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseHover}>
                {!read &&
                    <div className="filter"></div>
                }
                {isHovering &&
                    <div className="book-thumb-icons">
                        <IconButton faIcon={faEllipsisH}  />
                    </div>
                }
        </div>
    );
}

export default BookThumb;

BookThumb.propTypes = {
    book: PropTypes.shape({
        cover_url: PropTypes.string,
        title: PropTypes.string.isRequired,
        read: PropTypes.instanceOf(Date),
        owned: PropTypes.bool.isRequired
    })
}

