import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import ProgressModule from './ProgressModule'
// Remove ProgressModule from code before final version
const App = () => {
  return (
    <Router>
      <Switch>
        <ProgressModule />
      </Switch>
    </Router>
  )
}

export default App
