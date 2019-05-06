import React from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import ProgressModule from './ProgressModule'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/progress-module' component={ProgressModule} />
      </Switch>
    </Router>
  )
}

export default App
