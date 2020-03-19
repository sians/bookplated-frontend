import React from 'react';
import PropTypes from 'prop-types';

export default function QuoteCard({ quote: { text, pageNum } }) {
  return (
    <div className="quote-card">
        <div className="details">
            <div className="percentage-bar"></div>
            <div className="page-num">{ pageNum }</div>
            <div></div>
        </div>
        <p className="text">
            {text}
        </p>
    </div>
  );
}

QuoteCard.propTypes = {
    quote: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,

    }),
  };