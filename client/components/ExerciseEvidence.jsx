import React from 'react'

export default class ExerciseEvidence extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      exercisename: 'Exercise 1: How to slay all day everyday',
      description: 'When you slay every day  you will be glowing from the inside out. In order to do so, you need to reward yourself for all of the grinding you are doing on a daily basis. Set a little money aside from your monthly paycheck to ensure you treat yourself to keep your motivation up and as a reward for slaying hard'
    }
  }

  render () {
    const { exercisename, description } = this.state
    return (
      <React.Fragment>
        <h1>{exercisename}</h1>
        <h2>{description}</h2>
      </React.Fragment>
    )
  }
}
