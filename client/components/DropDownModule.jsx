import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

export default class DropDownModule extends React.Component {
  state = {
    module: getInitialData()
  }

  render () {
    return (
      <div>
        <h3>Module Exercises</h3>
        <ul>
          {this.state.module.map(assessment =>
            <li key={assessment.exerciseTitle}>{assessment.exerciseTitle}</li>
          )}
        </ul>
      </div>
    )
  }
}

<<<<<<< HEAD
    
    render () {
      return (
        <div>
    
            <DropdownButton id="dropdown-basic-button" title="Module 1">
              <Dropdown.Item href="#/action-1">{this.state.module[0].assessmentsTitle}</Dropdown.Item>
            </DropdownButton>
            <br />
            <DropdownButton id="dropdown-basic-button" title="Module 2">
              <Dropdown.Item href="#/action-1">{this.state.module[1].assessmentsTitle}</Dropdown.Item>
            </DropdownButton>
            <br/>
            <DropdownButton id="dropdown-basic-button" title="Module 3">
              <Dropdown.Item href="#/action-1">{this.state.module[2].assessmentsTitle}</Dropdown.Item>
            </DropdownButton>
            <br/>
            <DropdownButton id="dropdown-basic-button" title="Module 4">
              <Dropdown.Item href="#/action-1">{this.state.module[3].assessmentsTitle}</Dropdown.Item>
            </DropdownButton>
            
        </div>
      )
=======
function getInitialData () {
  return [
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
>>>>>>> 653b3f7143e7ce6cadf65f81e2de1cbd34bf46ae
    }
  ]
}
