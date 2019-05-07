import React from 'react'

export default class Header extends React.Component {
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
        <h2>{name}</h2>
        <h2>{surname}</h2>
        <h5>{cohort}</h5>
      </React.Fragment>
    )
  }
}
