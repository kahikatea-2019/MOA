module.exports = {
  reset,
  clear,
  getAssessments
}

const defaultAssessments = getAssessmentsData()
let assessments = defaultAssessments

function reset () {
  assessments = [ ...defaultAssessments ]
}

function clear () {
  assessments = []
}

function getAssessments () {
  return Promise.resolve(assessments)
}

function getAssessmentsData () {
  return [
    {
      'id': 1,
      'module_id': 1,
      'title': '1. Use Git and terminal commands to manage a code base',
      'description': 'desc'
    },
    {
      'id': 1,
      'module_id': 1,
      'title': '2. Use npm to manage library dependencies',
      'description': 'desc'
    },
    {
      'id': 1,
      'module_id': 1,
      'title': '3. Create well structured and tested code using JavaScript ES6',
      'description': 'desc'
    },
    {
      'id': 1,
      'module_id': 1,
      'title': '4. Design, build and use a relational database to persist data',
      'description': 'desc'
    },
    {
      'id': 1,
      'module_id': 1,
      'title': '5. Create code which reads and writes to the filesystem',
      'description': 'desc'
    },
    {
      'id': 1,
      'module_id': 1,
      'title': '6. Build a Command Line Interface tool',
      'description': 'desc'
    },
    {
      'id': 2,
      'module_id': 2,
      'title': '1. Produce and deploy a tested HTTP server with a restful JSON API',
      'description': 'desc'
    },
    {
      'id': 2,
      'module_id': 2,
      'title': '2. Create both server and client code that consumes a HTTP API',
      'description': 'desc'
    },
    {
      'id': 2,
      'module_id': 2,
      'title': '3. Create a rich client application using React and Redux',
      'description': 'desc'
    },
    {
      'id': 2,
      'module_id': 2,
      'title': '4. Create a responsive website using HTML and CSS',
      'description': 'desc'
    },
    {
      'id': 2,
      'module_id': 2,
      'title': '5. Use routing libraries to manage large client and server code bases',
      'description': 'desc'
    },
    {
      'id': 2,
      'module_id': 2,
      'title': '6. Secure a web application using Authentication libraries',
      'description': 'desc'
    },
    {
      'id': 3,
      'module_id': 3,
      'title': '1. Manage a programming team using agile management techniques',
      'description': 'desc'
    },
    {
      'id': 3,
      'module_id': 3,
      'title': '2. Give and receive constructive feedback to/from team mates',
      'description': 'desc'
    },
    {
      'id': 3,
      'module_id': 3,
      'title': '3. Present a technical project to a non-technical audience',
      'description': 'desc'
    },
    {
      'id': 3,
      'module_id': 3,
      'title': '4. Research a novel technology and teach it to others',
      'description': 'desc'
    },
    {
      'id': 3,
      'module_id': 3,
      'title': '5. Deliver a code review and provide technical feedback',
      'description': 'desc'
    },
    {
      'id': 3,
      'module_id': 3,
      'title': '6. Review a presentation and provide meaningful feedback',
      'description': 'desc'
    },
    {
      'id': 4,
      'module_id': 4,
      'title': '1. Create and follow a self-directed learning and personal development plan',
      'description': 'desc'
    },
    {
      'id': 4,
      'module_id': 4,
      'title': '2. Practice attentive listening and intentional clarifying questions',
      'description': 'desc'
    },
    {
      'id': 4,
      'module_id': 4,
      'title': '3. Display inclusive and supportive behaviour towards all team mates',
      'description': 'desc'
    },
    {
      'id': 4,
      'module_id': 4,
      'title': '4. Resolve interpersonal conflict in a technical project',
      'description': 'desc'
    },
    {
      'id': 4,
      'module_id': 4,
      'title': '5. Hold a difficult conversation',
      'description': 'desc'
    },
    {
      'id': 4,
      'module_id': 4,
      'title': '6. Actively contribute to creating a productive and inclusive team culture',
      'description': 'desc'
    }
  ]
}
