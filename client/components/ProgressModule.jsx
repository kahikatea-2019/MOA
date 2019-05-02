import React from 'react'

// * = Annoying
// ** = Difficult
// *** = Super difficult

export default class ProgressModule extends React.Component {
  state = {
    // ** Using MOCK data to display modules
    moduleTitle: 'Module 1: Core Programming', // * Passed prop from modules.js data 
    relevantModules: [ // *** TODO: (TRIPLE/QUAD JOIN) Get relevant module (module_id) joined with assesments (FK: module_id) joined with Students Assesments (FK: assessment_id)
        // Using the (FK: status_id) to get the relevant data
        // Following on --> select relevant data i.e
        // id, module_id, title from --> Assesments table
        // status_id, student from --> students.js
        {id: 1, module_id: 1, title: '1. Use Git and terminal commands to manage a code base' status_id: 4, student_id: 2},
        {id: 2, module_id: 1, title: '2. Use npm to manage library dependencies' status_id: 4, student_id: 2},
        {id: 3, module_id: 1, title: '3. Create well structured and tested code using JavaScript ES6' status_id: 4, student_id: 2},
        {id: 4, module_id: 1, title: '4. Design, build and use a relational database to persist data' status_id: 4, student_id: 2},
        {id: 5, module_id: 1, title: '5. Create code which reads and writes to the filesystem' status_id: 4, student_id: 2},
        {id: 6, module_id: 1, title: '6. Build a Command Line Interface tool' status_id: 4, student_id: 2},
    ]
  }

  getTitle() {
    return this.state.moduleTitle
  }

  calculateProgress () {
    // Will calculate the progress given relevant data
    return
  }


  render() {
    return <h1>Progress Component</h1>
  }
}