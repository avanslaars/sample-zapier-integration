const getProjects = (z, bundle) => {
  const promise = z.request('https://cypress-integrations-zapier-service-somzoktiod.now.sh/projects')
  return promise.then((response) => response.json)
}

module.exports = {
  key: 'projects',
  noun: 'List of Projects',
  display: {
    label: 'Projects',
    description: 'Gets a full list of projects'
  },
  operation: {
    perform: getProjects
  }
}