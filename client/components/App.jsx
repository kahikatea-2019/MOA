import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Dashboard from './Dashboard'
const App = () => {
  return (
    <Router>
      <Switch>
        <Dashboard/>
        <h1>MOA development has begun!</h1>
      </Switch>
    </Router>
  )
}

export default App
