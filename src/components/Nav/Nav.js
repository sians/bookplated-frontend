import React from 'react';
import { Link } from 'react-router-dom'


import IconButton from '../IconButton/IconButton'
import { faPlus, faChartBar, faEllipsisH } from '@fortawesome/free-solid-svg-icons'


export default function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <Link to={{pathname: '/'}}>
          bookplated
        </Link>
      </div>
      <ul>
        <li>
            <IconButton faIcon={faPlus}  />
        </li>
        <li>
            <IconButton faIcon={faChartBar}  />
        </li>
        <li>
            <IconButton faIcon={faEllipsisH}  />
        </li>
      </ul>
    </div>
  );
}