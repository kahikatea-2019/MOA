import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ProgressBar from './ProgressBar'
import Header from './Header'
import Register from './Register'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/register' component={Register} />
        <Route path ='/' component={Header} />
        <Route path='/progressbar' component={ProgressBar} />
        <h1>MOA development has begun!</h1>
      </Switch>
    </Router>
  )
}

export default App
