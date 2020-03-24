import React from 'react';

import { useHistory, useParams } from 'react-router'
import { useSelector } from 'react-redux'

import { actions as authorActions, selectors as authorSelectors } from '../../store/reducers/authors'
import AuthorDetails from '../../components/AuthorDetails/AuthorDetails';

function AuthorShow({ }) {

    const id = useParams();
    const author = useSelector(authorSelectors.getAuthor(id.id))

    console.log(author)
    return (
        <div>
            <AuthorDetails author={author} />
        </div>
    );
}

export default AuthorShow;

