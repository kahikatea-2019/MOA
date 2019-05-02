import React from 'react'
import Register from './Register'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Register} />
      </Switch>
    </Router>
  )
}

export default App
