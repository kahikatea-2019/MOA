import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

class Register extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    password: '',
    role: 'student',
    email: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = () => {
    // register button should link to register path
  }

  render () {
    return (
      <>
      <div className='register'>
        <input name='firstName'
          placeholder='First Name'
          value={this.state.firstName}
          onChange={this.onChange}
        />

        <input name='lastName'
          placeholder='Last Name'
          value={this.state.lastName}
          onChange={this.onChange}
        />

        <input name='password'
          type='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.onChange}
        />

        <input name='email'
          placeholder='Email'
          value={this.state.email}
          onChange={this.onChange}
        />

        <label>
          <select name='role' value={this.state.role} onChange={this.onChange}>
            <option value='facilitator'>Facilitator</option>
            <option value='student'>Student</option>
          </select>
        </label>
        <Link to ='/' ><Button variant="info" type='button' onClick={() => this.handleClick()}>Register</Button></Link>
      </div>
    </>

    )
  }
}

export default Register
