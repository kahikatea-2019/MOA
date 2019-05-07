import React from 'react'

export default class Header extends React.Component {
  state = getInitialData()

  render () {
    const { name, surname, cohort } = this.state
    return (
      <React.Fragment>
        <h1>{name}</h1>
        <h2>{surname}</h2>
        <h3>{cohort}</h3>
      </React.Fragment>
    )
  }
}

function getInitialData () {
  return {
    name: 'ete',
    surname: 'surname',
    cohort: 'cohort'
  }
}
