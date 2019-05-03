import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProgressBar from './ProgressBar'
import Header from './Header'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/progressbar' component={ProgressBar} />
        <Route path ='/' component={Header} />
      </Switch>
    </Router>
  )
}

export default App
