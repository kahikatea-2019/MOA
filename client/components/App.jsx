import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Register from './Register'
import Login from './Login'



const App = () => {
  return (
    <Router>
      <Switch> 
        <Route path ='/' component={Header} />
        <Route path='/register' component={Register} />
        <Route path='/' component ={Login} />
      </Switch>
    </Router>
  )
}

export default App
