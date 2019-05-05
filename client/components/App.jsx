import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Dashboard from './Dashboard'
import Register from './Register'

const App = () => {
  return (
    <Router>
      <Dashboard />
      <Switch>
        <Route path= '/dashboard' component={Dashboard} />
        <Route path='/register' component={Register} />
        <Route path ='/' component={Header} />
      </Switch>
    </Router>
  )
}

export default App
