import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Register from './Register'
import Dashboard from './Dashboard'
import Login from './Login'
import DropDownModule from './DropDownModule'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component ={Login} />
        <Route path='/register' component={Register} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
      <DropDownModule />
    </Router>
  )
}

export default App
