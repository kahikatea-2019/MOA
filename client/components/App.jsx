import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Register from './Register'

import DropDownModule from './DropDownModule'

const App = () => {
  return (

    <Router>
      <DropDownModule />
      <Switch>
<<<<<<< HEAD
<<<<<<< HEAD
        <h1>MOA development has begun!</h1>

=======
      <Route path ='/' component={Header} />
        <h1>MOA development has begun!</h1>      
>>>>>>> 63382626e62f7f1cbdf9dd958011053a7ec18a31
=======
        <Route path='/register' component={Register} />
        <Route path ='/' component={Header} />
        <h1>MOA development has begun!</h1>
>>>>>>> e237c18579df23b16ef764542f75b98dbda6bcce
      </Switch>
    </Router>
  )
}

export default App
