import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from './Header'

const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <h1>MOA development has begun!</h1>      
      </Switch>
    </Router>
  )
}

export default App
