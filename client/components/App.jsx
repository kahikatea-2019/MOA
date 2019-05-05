import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Register from './Register'
import DropDownModule from './DropDownModule'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/register' component={Register} />
        <Route path ='/' component={Header} />
      </Switch>
      <DropDownModule />
    </Router>
  )
}

export default App
