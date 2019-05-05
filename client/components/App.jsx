import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './Login'
import Header from './Header'
import Register from './Register'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component ={Login} />
        <Route path='/register' component={Register} />
        <Route path ='/' component={Header} />
      </Switch>
    </Router>
  )
}

export default App
