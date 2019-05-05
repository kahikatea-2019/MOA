import React from 'react'
<<<<<<< HEAD
<<<<<<< HEAD

import Login from './Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
=======
=======

>>>>>>> e1ec352b30e181a3345a5513b6ff8f41724c1f10
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './Login'
import Header from './Header'
import Register from './Register'
<<<<<<< HEAD
>>>>>>> 8f9a84037eb5773a290d3b865d54d1faa97e38a6
=======

>>>>>>> e1ec352b30e181a3345a5513b6ff8f41724c1f10

const App = () => {
  return (
    <Router>
      <Switch>
<<<<<<< HEAD
<<<<<<< HEAD
        <Route path='/' component ={Login} />
=======
        <Route path='/register' component={Register} />
        <Route path ='/' component={Header} />
>>>>>>> 8f9a84037eb5773a290d3b865d54d1faa97e38a6
=======
        <Route path='/' component ={Login} />
        <Route path='/register' component={Register} />
        <Route path ='/' component={Header} />
>>>>>>> e1ec352b30e181a3345a5513b6ff8f41724c1f10
      </Switch>
    </Router>
  )
}

export default App
