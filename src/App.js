import React, { useState } from 'react';

import { BrowserRouter } from 'react-router-dom'
import Router from './navigation/Router'

import Nav from './components/Nav/Nav'

import './styles/main.scss';

function App() {
  const [pathName, setPathname] = useState('')
  const handleRoutePathName = (pathName) => {
    setPathname(pathName)
  }
  console.log(pathName)

  return (
    <BrowserRouter>
      <div className="app-content">
        <Nav />
        <Router setRoutePathName={handleRoutePathName} />
      </div>
    </BrowserRouter>
  )
}

export default App;
