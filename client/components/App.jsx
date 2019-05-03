import React from 'react'

import Login from './Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
<<<<<<< HEAD

import Header from './Header'
=======

import Header from './Header'

>>>>>>> 512d9d4aaf291ce966b1447355c1a52744f3a66c

const App = () => {
  return (
    <Router>
      <Switch>
<<<<<<< HEAD
        <Route path='/' component ={Login} />
        <Route path ='/' component={Header} />
=======
      <Route path='/' component ={Login} />
      <Route path ='/' component={Header} />
>>>>>>> 512d9d4aaf291ce966b1447355c1a52744f3a66c
      </Switch>
    </Router>
  )
}

export default App
