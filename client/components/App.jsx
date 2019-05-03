import React from 'react'

import Login from './Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Header'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component ={Login} />
        <Route path ='/' component={Header} />
      </Switch>
    </Router>
  )
}

export default App
