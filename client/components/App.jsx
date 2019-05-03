import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProgressBar from './ProgressBar'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/progressbar' component={ProgressBar} />
      </Switch>
    </Router>
  )
}

export default App
