import React, { useEffect } from 'react'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'

import Home from '../pages/Home/Home'
import AuthorShow from '../pages/AuthorShow/AuthorShow'
import BookShow from '../pages/BookShow/BookShow'

const Router = ({ setRoutePathName }) => {
    const location = useLocation()
  
    // function usePageViews() {
    //     useEffect(() => {
    //       setRoutePathName(location.pathname)
    //     }, [location])
    //   }
    
    // usePageViews(setRoutePathName)
    // console.log(location)

    return (
        <Switch location={location}>
            <Route path="/" exact component={Home} />
            <Route path="/author/:id" exact component={AuthorShow} />
            <Route path="/book/:id" exact component={BookShow} />
            <Redirect from="*" to="/" />
        </Switch>
    )
  }
  
  export default Router
  