import React from 'react'

class Register extends React.Component {
state = {
  first_name: '',
  last_name: '',
  password: '',
  role: '',
  cohorts: ''
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
      <input name='first_name'
        placeholder='First Name'
        value={this.state.first_name}
        onChange={e => this.onChange(e)}
      />
      <br/>

      <input name='last_name'
        placeholder='Last Name'
        value={this.state.last_name}
        onChange={e => this.onChange(e)}
      />
      <br/>

      <input name='password'
        type='password'
        placeholder='Password'
        value={this.state.password}

        onChange={e => this.onChange(e)}
      />
      <br/>

      <input name='email'
        placeholder='Email'
        value={this.state.cohorts}
        onChange={e => this.onChange(e)}
      />
      <br/>

      <label>
        <select name='role' onChange={e => this.onChange(e)}>
          <option value='Facilitator'>Facilitator</option>
          <option value='Student'>Student</option>
        </select>
      </label>
      <br/>

      <button type='button' onClick={() => this.handleClick()}>Register</button>
    </div>
    </>

  )
}
}

export default Register
