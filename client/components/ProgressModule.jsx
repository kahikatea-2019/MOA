import React from 'react'

export default class ProgressModule extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      moduleComplete: false, // If the module is completed display a check
      moduleProgress: 0
    }

    this.getModule = this.getModule.bind(this)
    this.getProgress = this.getProgress.bind(this)
  }

  // Replace the getter functions with relevant redux data integration
  getModule () { // event handler for onClick
    return ({id: 1, title: 'Module 1: Core Programming'})
  }

  getAssesments (module_id) {
    return ([
      {id: 1, module_id: 1, title: '1. Use Git and terminal commands to manage a code base', description: 'desc', link: 'link', week_day: 'weekday'},
      {id: 2, module_id: 1, title: '2. Use npm to manage library dependencies', description: 'desc', link: 'link', week_day: 'weekday'},
      {id: 3, module_id: 1, title: '3. Create well structured and tested code using JavaScript ES6', description: 'desc', link: 'link', week_day: 'weekday'},
      {id: 4, module_id: 1, title: '4. Design, build and use a relational database to persist data', description: 'desc', link: 'link', week_day: 'weekday'},
      {id: 5, module_id: 1, title: '5. Create code which reads and writes to the filesystem', description: 'desc', link: 'link', week_day: 'weekday'},
      {id: 6, module_id: 1, title: '6. Build a Command Line Interface tool', description: 'desc', link: 'link', week_day: 'weekday'}
    ])
  }

  getStudentsAssessments (assessment_id) {
    return ([
      {id: 1, student_id: 1, assessment_id: 1, status_id: 4, evidence: 'evidence', date_modified: 'date'},
      {id: 1, student_id: 1, assessment_id: 2, status_id: 3, evidence: 'evidence', date_modified: 'date'},
      {id: 1, student_id: 1, assessment_id: 3, status_id: 2, evidence: 'evidence', date_modified: 'date'},
      {id: 1, student_id: 1, assessment_id: 4, status_id: 1, evidence: 'evidence', date_modified: 'date'},
      {id: 1, student_id: 1, assessment_id: 5, status_id: 2, evidence: 'evidence', date_modified: 'date'},
      {id: 1, student_id: 1, assessment_id: 6, status_id: 1, evidence: 'evidence', date_modified: 'date'}
    ])
  }

  getAssesmentStatus (status_id) { // Still mock data! Output decided by case statement
    let fraction = 0
    switch (status_id) {
      case 1:
        fraction = 0
        break
      case 2:
        fraction = 1 / 12 // Design decision: Should 'in progress' and 'awaiting_review' be assigned a completion value? if so what should it be?
        break
      case 3:
        fraction = 1 / 12
        break
      case 4:
        fraction = 1 / 6 // completed awards a 16.66% that can be stored in state
        break
    }
    return fraction
  }

  // Function returns the progress form state and also marks compl
  getProgress () {
    const progress = this.state.moduleProgress
    const completion = this.state.moduleComplete
    if (progress >= 0.99 && !completion) { // 0.99 incase the module progress didn't add nicely (#Fractions)
      this.setState({
        moduleComplete: true
      })
      // return (this.renderCheck())
    }
    return progress
  }

  // renderCheck() {
  //   return // elements for rendering check
  // }

  calculateProgress () {
    const module = this.getModule()
    const assessments = this.getAssesments(module.id)
    let studentAsses = this.getStudentsAssessments()
    const input = []

    // Create array of all relevant student assesments
    assessments.forEach(assessment => {
      studentAsses.forEach(studentAssessment => {
        if (assessment.id === studentAssessment.assessment_id) {
          input.push(studentAssessment)
        }
      })
    })

    // Calculates a score for each mark and stores it in an array.
    let output = input.map(studentAssessment => {
      const score = this.getAssesmentStatus(studentAssessment.status_id)
      return score
    })

    let updatedProgress = 0
    output.forEach(mark => {
      updatedProgress += mark
    })

    console.log('Updated', updatedProgress)

    this.setState({
      moduleProgress: updatedProgress
    })
  }

  render () {
    return (
      <React.Fragment>
        <button onClick={() => this.calculateProgress()}>Calculate Progress</button>
        <h3>Module progress: {Math.round(this.getProgress() * 100)} %</h3>
        {console.log(this.state.moduleProgress)}
      </React.Fragment>
    )
  }
}

// ** Using MOCK data to display modules

// *** TODO: (TRIPLE/QUAD JOIN) Get relevant module (module_id) joined with assesments (FK: module_id) joined with Students Assesments (FK: assessment_id)
// Using the (FK: status_id) to get the relevant data
// Following on --> select relevant data i.e
// id, module_id, title from --> Assesments table
// status_id, student from --> students.js