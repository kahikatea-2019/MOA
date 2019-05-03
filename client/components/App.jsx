import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from './Header'


import DropDownModule from './DropDownModule'

const App = () => {
  return (

    <Router>
      <DropDownModule />
      <Switch>
<<<<<<< HEAD
        <h1>MOA development has begun!</h1>

=======
      <Route path ='/' component={Header} />
        <h1>MOA development has begun!</h1>      
>>>>>>> 63382626e62f7f1cbdf9dd958011053a7ec18a31
      </Switch>
    </Router>
  )
}

export default App
