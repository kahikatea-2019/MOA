import React from 'react'

export default class Login extends React.Component {
  state = {
    username: '',
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

       <p>Username:</p>
       <input name='username'
         value={this.state.username}
         onChange={this.handleChange} />

       <p>Password:</p>
       <input name='password' type='password'
         value={this.state.password}
         onChange={this.handleChange} />
       <br/>
       <br/>
       <br/>

       <button type='button' onClick={this.handleClick}>Login</button>

     </React.Fragment>
   )
 }
}
