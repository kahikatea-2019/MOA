import React from 'react'

class Register extends React.Component {
state = {
  first_name: '',
  last_name: '',
  email: '',
  password: ''
}

onChange = (e) => {
  const value = e.target.checked === undefined ? e.target.value : e.target.checked;
  
}



  render () {
    return (

    )
  }



}

export default Register
