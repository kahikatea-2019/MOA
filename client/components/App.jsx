import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Register from './Register'
import ProgressBar from './ProgressBar'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/progressbar' component={ProgressBar} />
      </Switch>
    </Router>
  )
}

export default App
