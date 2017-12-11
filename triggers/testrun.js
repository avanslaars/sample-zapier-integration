const getTestRun = (z, bundle) => {
  const projectName = bundle.inputData.projectName
  const urlBase = 'https://cypress-integrations-zapier-service-somzoktiod.now.sh/runs'
  const projectSegment = projectName ? `/${projectName}` : '/all'
  const url = `${urlBase}${projectSegment}`
  const promise = z.request(url)
  return promise.then((response) => response.json)
}

module.exports = {
  key: 'testrun',
  noun: 'Test Run',
  display: {
    label: 'Any New Test Run',
    description: 'Trigger when there is a new test run, regardless of outcome.'
  },
  operation: {
    perform: getTestRun
  }
}