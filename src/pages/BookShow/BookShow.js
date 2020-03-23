import React from 'react';
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'


function BookShow({ }) {
    const history = useHistory();

    const handleGoBack = () => {
        history.goBack();
    }
    
    return (
        <div>
            <h4>BookShow page</h4>
            <Link to={{pathname: '/author'}}>Author</Link>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
}

export default BookShow;

