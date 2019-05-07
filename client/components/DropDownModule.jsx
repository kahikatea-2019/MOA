import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

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

    moduleExercises = this.state.module.map(assessment => {
      return <li key={assessment.exerciseTitle}>{assessment.exerciseTitle}</li>
    })

    
    render () {
      return (
        <div>
    
            <DropdownButton id="dropdown-basic-button" title="Module 1">
              <Dropdown.Item href="#/action-1">Something else 1 </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <br />
            <DropdownButton id="dropdown-basic-button" title="Module 2">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <br/>
            <DropdownButton id="dropdown-basic-button" title="Module 3">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <br/>
            <DropdownButton id="dropdown-basic-button" title="Module 4">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <br/>
        </div>
      )
    }
}

