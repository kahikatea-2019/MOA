import React from 'react'
<<<<<<< HEAD
import Register from './Register'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
=======
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from './Header'

>>>>>>> c03a930193e9bafa776d9a4c0a7e6315299893e1

const App = () => {
  return (
    <Router>
      <Switch>
<<<<<<< HEAD
        <Route exact path='/register' component={Register} />
=======
      <Route path ='/' component={Header} />
        <h1>MOA development has begun!</h1>      
>>>>>>> c03a930193e9bafa776d9a4c0a7e6315299893e1
      </Switch>
    </Router>
  )
}

export default App
