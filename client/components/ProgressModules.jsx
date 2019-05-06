import React from 'react'
import ProgressModule from './ProgressModule'

export default function ProgressModules (props) {
  // const { module, assessments, studentsAssessments } = props

  // mocked data -  this should come from props (from Dashboard)
  const modules = [
    { id: 1, title: 'Module 1: Core Programming' },
    { id: 2, title: 'Module 2: Web development' },
    { id: 3, title: 'Module 3: Teamwork & Leadership' },
    { id: 4, title: 'Module 4: Human Skills' }
  ]
  const assessments = [
    { id: 1, module_id: 1, title: '1. Use Git and terminal commands to manage a code base', description: 'desc' },
    { id: 2, module_id: 1, title: '2. Use npm to manage library dependencies', description: 'desc' },
    { id: 3, module_id: 1, title: '3. Create well structured and tested code using JavaScript ES6', description: 'desc' },
    { id: 4, module_id: 1, title: '4. Design, build and use a relational database to persist data', description: 'desc' },
    { id: 5, module_id: 1, title: '5. Create code which reads and writes to the filesystem', description: 'desc' },
    { id: 6, module_id: 2, title: '6. Build a Command Line Interface tool', description: 'desc' },
    { id: 7, module_id: 2, title: '6. Build a Command Line Interface tool', description: 'desc' },
    { id: 8, module_id: 3, title: '6. Build a Command Line Interface tool', description: 'desc' }
  ]
  const studentAssessments = [
    { id: 1, student_id: 1, assessment_id: 1, status_id: 4, evidence: 'evidence', date_modified: 'date' },
    { id: 1, student_id: 1, assessment_id: 2, status_id: 3, evidence: 'evidence', date_modified: 'date' },
    { id: 1, student_id: 1, assessment_id: 3, status_id: 2, evidence: 'evidence', date_modified: 'date' },
    { id: 1, student_id: 1, assessment_id: 4, status_id: 1, evidence: 'evidence', date_modified: 'date' },
    { id: 1, student_id: 1, assessment_id: 5, status_id: 2, evidence: 'evidence', date_modified: 'date' },
    { id: 1, student_id: 1, assessment_id: 6, status_id: 4, evidence: 'evidence', date_modified: 'date' },
    { id: 1, student_id: 1, assessment_id: 7, status_id: 4, evidence: 'evidence', date_modified: 'date' },
    { id: 1, student_id: 1, assessment_id: 8, status_id: 1, evidence: 'evidence', date_modified: 'date' },
    { id: 1, student_id: 1, assessment_id: 9, status_id: 1, evidence: 'evidence', date_modified: 'date' }
  ]

  const progressModules = modules.map(module => {
    return <ProgressModule key={module.id} progress={calculateProgress(module.id, assessments, studentAssessments)}/>
  })
  return (
    <React.Fragment>
      {progressModules}
    </React.Fragment>
  )
}

function calculateProgress (moduleId, assessments, studentAssessments) {
  const moduleAssessments = []

  // Create array of all relevant assessments
  assessments.forEach(assessment => {
    if (assessment.module_id === moduleId) {
      moduleAssessments.push(assessment)
    }
  })

  // Create array of all relevant student assessments
  const moduleStudentAssessments = moduleAssessments.map(assessment => {
    return studentAssessments.find(studentAssessment => studentAssessment.assessment_id === assessment.id)
  })

  console.log('moduleStudentAssessments', moduleStudentAssessments)
  // Calculate module progress
  let numberCompleted = 0
  moduleStudentAssessments.forEach(assessment => {
    if (assessment.status_id === 4) {
      numberCompleted++
    }
  })
  const progress = numberCompleted / moduleStudentAssessments.length
  console.log(progress)
  return progress * 100
}
