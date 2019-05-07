import React from 'react'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'


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
    }
  ]
}

export default class DropDownModule extends React.Component {
  state = {
    module: getInitialData()
  }

  render () {
    return (
      <div>
      <br/>

<Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Module 1
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body><a href="/Evidence">{this.state.module[0].assessmentsTitle}</a></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Module 2
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body><a href="/Evidence">{this.state.module[1].assessmentsTitle}</a></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
      Module 3
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body><a href="/Evidence">{this.state.module[2].assessmentsTitle}</a></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3">
      Module 4
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body><a href="/Evidence">{this.state.module[3].assessmentsTitle}</a></Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

    </div>
    )
  }
}


