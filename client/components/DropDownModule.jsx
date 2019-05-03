import React from 'react'

export default class DropDownModule extends React.Component {
  state = {
    module: [
      {
        'moduleId': '1',
        'moduleTitle': 'Module 1: Core Programming',
        'assessmentsId': 1,
        'assessmentsTitle': '1. Use Git and terminal commands to manage a code base',
        'description': 'desc',
        'link': 'link',
        'week_day': 'weekday',
        'exerciseId': 1,
        'exerciseTitle': 'https://github.com/dev-academy-challenges/taxonomic-routing'
      },
      {
        'moduleId': 1,
        'moduleTitle': 'Module 1: Core Programming',
        'assessmentsId': 1,
        'assessmentsTitle': '2. Use npm to manage library dependencies',
        'description': 'desc',
        'link': 'link',
        'week_day': 'weekday',
        'exerciseId': 2,
        'exerciseTitle': 'https://github.com/dev-academy-challenges/knex-relationships-stories'
      },
      {
        'moduleId': 1,
        'moduleTitle': 'Module 1: Core Programming',
        'assessmentsId': 23,
        'assessmentsTitle': '5. Hold a difficult conversation',
        'description': 'desc',
        'link': 'link',
        'week_day': 'weekday',
        'exerciseId': 23,
        'exerciseTitle': 'deep dive with human skills facilitator'
      },
      {
        'moduleId': 2,
        'moduleTitle': 'Module 1: Core Programming',
        'assessmentsId': 24,
        'assessmentsTitle': '6. Actively contribute to creating a productive and inclusive team culture',
        'description': 'desc',
        'link': 'link',
        'week_day': 'weekday',
        'exerciseId': 24,
        'exerciseTitle': 'observation'
      }
    ]
  }

  // Code to remove duplicates and return an array of module Ids - this may not be needed if the data
  // passed can come directly from the assessments table
  // numModules = (module) => module.filter((v,i) => module.indexOf(v) === i)
  // numModules(module)

  // Code to filter through module
  // module1Data = state.module.filter(assessment => {
  // if (assessment.moduleId === moduleId)
  // })

    moduleExercises = this.state.module.map(assessment => {
      return <li key={assessment.exerciseTitle}>{assessment.exerciseTitle}</li>
    })

    render () {
      return (
        <div>
          <h3>Module Exercises</h3>
          <ul>
            {this.moduleExercises}
          </ul>
        </div>
      )
    }
}

