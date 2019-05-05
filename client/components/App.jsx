import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './Dashboard'
import Register from './Register'

const App = () => {
  return (
    <Router>
      <Dashboard />
      <Switch>
        <Route path='/register' component={Register} />
        <Route path ='/' component={Header} />
        <h1>MOA development has begun!</h1>
      </Switch>
    </Router>
  )
}

export default App
