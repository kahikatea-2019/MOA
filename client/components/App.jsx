import React from 'react'
import Register from './Register'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <h1>MOA development has begun!</h1>
      <Route path='/register' component={Register} />
    </Router>
  )
}

export default App
