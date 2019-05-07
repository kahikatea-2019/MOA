import React from 'react'
import ProgressModule from './ProgressModule'

export default function ProgressModules (props) {
  const { modules, assessments, studentAssessments } = props
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
  // Create array of all relevant assessments
  const moduleAssessments = []
  assessments.forEach(assessment => {
    if (assessment.module_id === moduleId) {
      moduleAssessments.push(assessment)
    }
  })
  // Create array of all relevant student assessments
  const moduleStudentAssessments = moduleAssessments.map(assessment => {
    return studentAssessments.find(studentAssessment => studentAssessment.assessment_id === assessment.id)
  })
  // Calculate module progress
  let numberCompleted = 0
  moduleStudentAssessments.forEach(assessment => {
    if (assessment.status_id === 4) {
      numberCompleted++
    }
  })
  const progress = numberCompleted / moduleStudentAssessments.length
  return progress * 100
}
