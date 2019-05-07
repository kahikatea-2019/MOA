import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = e => {
    e.preventDefault()
  }

  render () {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <p>Email:</p>
        <input name='email'
          value={this.state.email}
          onChange={this.handleChange} />
        <p>Password:</p>
        <input name='password' type='password'
          value={this.state.password}
          onChange={this.handleChange} />
        <br/>
        <Link to ='/dashboard' ><Button variant="info" type='button' onClick={() => this.handleClick()} >Login</Button></Link>
        <br/>
        <Link to ='/register'><p>Don't have a login? Click here to register</p></Link>
      </React.Fragment>
    )
  }
}
