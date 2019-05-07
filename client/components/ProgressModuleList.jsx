import React from 'react'
import ProgressModule from './ProgressModule'

export default function ProgressModules (props) {
  const { assessments, studentAssessments } = props
  const moduleIds = Array.from(new Set(assessments.map(assessment => assessment.module_id)))

  const progressModules = moduleIds.map(id => {
    return <ProgressModule
      key={id}
      progress={calculateProgress(id, assessments, studentAssessments)}
    />
  })
  return (
    <React.Fragment>
      {progressModules}
    </React.Fragment>
  )
}

function calculateProgress (moduleId, assessments, studentAssessments) {
  const moduleAssessments = []
  assessments.forEach(assessment => {
    if (assessment.module_id === moduleId) {
      moduleAssessments.push(assessment)
    }
  })
  const moduleStudentAssessments = moduleAssessments.map(assessment => {
    return studentAssessments.find(studentAssessment => studentAssessment.assessment_id === assessment.id)
  })
  let numberCompleted = 0
  moduleStudentAssessments.forEach(assessment => {
    if (assessment.status_id === 4) {
      numberCompleted++
    }
  })
  const progress = numberCompleted / moduleStudentAssessments.length
  return progress * 100
}
