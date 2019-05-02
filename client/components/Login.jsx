import React, { useState } from 'react'
// const isAuthenticated = () => true
const logIn = () => {} // we will import login from authenticare
// import { logIn, isAuthenticated } from 'authenticare/client'

export default function Login (props) {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = () => {
    logIn({
      username: form.username,
      password: form.password
    }) // remove the ) when you add token
  }
  //   , {
  //     baseUrl: process.env.BASE_API_URL // see .env and webpack.config.js
  //   })
  //     .then((token) => {
  //       if (isAuthenticated()) {
  //         props.history.push('/')
  //       }
  //     })
  // }
  return (
    <React.Fragment>
      <h1>Login</h1>

      <p>Username:</p>
      <input name='username'
        value={form.username}
        onChange={handleChange} />

      <p>Password:</p>
      <input name='password' type='password'
        value={form.password}
        onChange={handleChange} />
      <br/>
      <br/>
      <br/>
      
      <button type='button' onClick={handleClick}>Login</button>

    </React.Fragment>
  )
}
