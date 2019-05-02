import React from 'react'

class ProgressModule extends React.Component {
  state = {
    // Using MOCK data to display modules
    moduleTitle: 'Module 1: Core Programming', // Passed prop from modules.js data 
    relevantModules: [ // Get all the data from the database for the relevant module.
        {id: 1, module_id: 1, title: '1. Use Git and terminal commands to manage a code base', description: 'desc', link: 'link', week_day: 'weekday'},
        {id: 2, module_id: 1, title: '2. Use npm to manage library dependencies', description: 'desc', link: 'link', week_day: 'weekday'},
        {id: 3, module_id: 1, title: '3. Create well structured and tested code using JavaScript ES6', description: 'desc', link: 'link', week_day: 'weekday'},
        {id: 4, module_id: 1, title: '4. Design, build and use a relational database to persist data', description: 'desc', link: 'link', week_day: 'weekday'},
        {id: 5, module_id: 1, title: '5. Create code which reads and writes to the filesystem', description: 'desc', link: 'link', week_day: 'weekday'},
        {id: 6, module_id: 1, title: '6. Build a Command Line Interface tool', description: 'desc', link: 'link', week_day: 'weekday'},
    ]
  }

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default ProgressModule
