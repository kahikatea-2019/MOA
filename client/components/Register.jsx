import React from 'react'
import { Link } from 'react-router-dom'
class Register extends React.Component {
state = {
  firstName: '',
  lastName: '',
  password: '',
  role: '',
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
        onChange={e => this.onChange(e)}
      />

      <input name='lastName'
        placeholder='Last Name'
        value={this.state.lastName}
        onChange={e => this.onChange(e)}
      />

      <input name='password'
        type='password'
        placeholder='Password'
        value={this.state.password}

        onChange={e => this.onChange(e)}
      />

      <input name='email'
        placeholder='Email'
        value={this.state.email}
        onChange={e => this.onChange(e)}
      />

      <label>
        <select name='role' onChange={e => this.onChange(e)}>
          <option value='facilitator'>Facilitator</option>
          <option value='student'>Student</option>
        </select>
      </label>

      <button type='button' onClick={() => this.handleClick()}><Link to ='/'>Register</Link></button>
    </div>
    </>

  )
}
}

export default Register
