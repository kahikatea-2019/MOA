import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from './Header'


import DropDownModule from './DropDownModule'

const App = () => {
  return (

    <Router>
    
      <Switch>
      <Route path ='/' component={Header} />
        <h1>MOA development has begun!</h1>      
      </Switch>
      <DropDownModule />
    </Router>
  )
}

export default App
