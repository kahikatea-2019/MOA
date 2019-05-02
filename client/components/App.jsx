import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProgressBar from './ProgressBar'

const App = () => {
  return (
    <Router>
      <Switch>
        <h1>MOA development has begun!</h1>
        <Route exact path='/ProgressBar' component={ProgressBar} />
      </Switch>
    </Router>
  )
}

export default App
