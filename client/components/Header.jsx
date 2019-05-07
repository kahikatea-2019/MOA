import React from 'react'

export default class Header extends React.Component {
  state = getInitialData()

  render () {
    const { name, surname, cohort } = this.state
    return (
      <React.Fragment>
        <h2>{name}</h2>
        <h2>{surname}</h2>
        <h5>{cohort}</h5>
      </React.Fragment>
    )
  }
}

function getInitialData () {
  return {
    name: 'Jane',
    surname: 'Doe',
    cohort: 'Kahikatea 2019'
  }
}
