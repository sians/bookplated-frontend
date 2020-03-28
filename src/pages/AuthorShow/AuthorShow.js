import React from 'react';

import { useHistory, useParams } from 'react-router'
import { useSelector } from 'react-redux'

import { actions as authorActions, selectors as authorSelectors } from '../../store/reducers/authors'

import AuthorDetails from '../../components/AuthorDetails/AuthorDetails';
import Tabs from '../../components/Tabs/Tabs'


function AuthorShow({ }) {

    const id = useParams();
    const author = useSelector(authorSelectors.getAuthor(id.id))

    console.log(author)

    const tabChildren = [
        {
            "label": "Biography",
            "data": ["this would be some text probably"],
        },
        {
            "label": "Quotes",
            "data": [
                "quote of some stuuuuuff",
                "more quotes and clever  words",
                "super clever quotes qoo hoo woo ba doo"],
        },
        {
            "label": "Notes",
            "data": ["1", "2", "3"],
        }        
    ]

    return (
        <div className="author-show-container">
            <AuthorDetails author={author} />
            <Tabs children={tabChildren} />

        </div>
    );
}

export default AuthorShow;

