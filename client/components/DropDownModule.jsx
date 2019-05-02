import React from 'react'

export default class DropDownModule extends React.Component {
  state = {
    module: [
      {
        'moduleId': 1,
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
        'assessmentsId': 2,
        'assessmentsTitle': '2. Use npm to manage library dependencies',
        'description': 'desc',
        'link': 'link',
        'week_day': 'weekday',
        'exerciseId': 2,
        'exerciseTitle': 'https://github.com/dev-academy-challenges/knex-relationships-stories'
      }
    ]
  }

  moduleName = this.state.module.map(item => {
    return <li>{item.moduleTitle}</li>
  })

  render () {
    return (
      <div>
        <ul>
          <li>{this.moduleName}</li>
        </ul>
      </div>
    )
  }
}

