import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCheck, faTimes, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

import IconButton from '../IconButton/IconButton'

function BookThumb({ book: {coverUrl, title, read, owned } }) {
    const [isHovering, setIsHovering] = useState(false);
    const [iconMenuOpen, setIconMenuOpen] = useState(false);

    const handleMouseHover = () => { 
        setIsHovering(!isHovering)
        if (!isHovering) setIconMenuOpen(false);
    }
    const handleIconMenuToggle = () => {
        setIconMenuOpen(!iconMenuOpen)
    }

    return (
        <div className={`cover ${read ? '' : 'unread'}`}
            style={{backgroundImage: `url(${coverUrl})`}}
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseHover}>
                {!read &&
                    <div className="filter"></div>
                }
                {isHovering &&
                    <div className="book-thumb-icons">
                        <IconButton faIcon={faEllipsisH} action={handleIconMenuToggle} />
                        {iconMenuOpen &&
                            <div className="icon-menu">
                                {!read &&
                                    <IconButton faIcon={faCheck} />
                                }
                                {read && 
                                    <IconButton faIcon={faTimes} />
                                }
                                <IconButton faIcon={faBook} />
                            </div>
                        }
                    </div>
                }
        </div>
    );
}

export default BookThumb;

BookThumb.propTypes = {
    book: PropTypes.shape({
        coverUrl: PropTypes.string,
        title: PropTypes.string.isRequired,
        read: PropTypes.instanceOf(Date),
        owned: PropTypes.bool.isRequired,
    })
}

