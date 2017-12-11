const getTestRun = (z, bundle) => {
  const projectName = bundle.inputData.projectName
  const urlBase = 'https://cypress-integrations-zapier-service-somzoktiod.now.sh/runs/passed'
  const projectSegment = projectName ? `/${projectName}` : ''
  const url = `${urlBase}${projectSegment}`
  const promise = z.request(url)
  return promise.then((response) => response.json)
}

module.exports = {
  key: 'passing',
  noun: 'Passing Test Run',
  display: {
    label: 'New Passing Test Run',
    description: 'Trigger when there is a new test run that passed.'
  },
  operation: {
    inputFields: [
      {key: 'projectName', type: 'string', required: false, dynamic: 'projects.name.name'}
    ],
    perform: getTestRun
  }
}