import React from 'react'

export default class AddWidget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'ete',
      surname: 'surname',
      cohort: 'cohort'
    }
  }

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
