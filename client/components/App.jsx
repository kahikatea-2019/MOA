import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import DropDownModule from './DropDownModule'

const App = () => {
  return (

    <Router>
    
      <Switch>
        <h1>MOA development has begun!</h1>
      </Switch>
      <DropDownModule />
    </Router>
  )
}

export default App
