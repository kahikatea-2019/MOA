import React from 'react'
<<<<<<< HEAD

import Login from './Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
=======
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Register from './Register'
>>>>>>> 8f9a84037eb5773a290d3b865d54d1faa97e38a6

const App = () => {
  return (
    <Router>

      <Switch>
<<<<<<< HEAD
        <Route path='/' component ={Login} />
=======
        <Route path='/register' component={Register} />
        <Route path ='/' component={Header} />
>>>>>>> 8f9a84037eb5773a290d3b865d54d1faa97e38a6
      </Switch>

    </Router>
  )
}

export default App
