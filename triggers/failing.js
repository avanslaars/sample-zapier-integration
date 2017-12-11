const getTestRun = (z, bundle) => {
  const projectName = bundle.inputData.projectName
  const urlBase = 'https://cypress-integrations-zapier-service-somzoktiod.now.sh/runs/failed'
  const projectSegment = projectName ? `/${projectName}` : ''
  const url = `${urlBase}${projectSegment}`
  const promise = z.request(url)
  return promise.then((response) => response.json)
}

module.exports = {
  key: 'failing',
  noun: 'Failing Test Run',
  display: {
    label: 'New Failing Test Run',
    description: 'Trigger when there is a new test run that failed.'
  },
  operation: {
    inputFields: [
      {key: 'projectName', type: 'string', required: false, dynamic: 'projects.name.name'}
    ],
    perform: getTestRun
  }
}