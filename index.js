const testRun = require('./triggers/testrun')
const failing = require('./triggers/failing')
const passing = require('./triggers/passing')
const projects = require('./triggers/projects')

const addApiKeyToHeader = (request, z, bundle) => {
  request.headers['AVS-AUTH-TOKEN'] = bundle.authData.apiKey
  return request
}
// We can roll up all our behaviors in an App.
const App = {
  // This is just shorthand to reference the installed dependencies you have. Zapier will
  // need to know these before we can upload
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: {
    type: 'custom',
    fields: [
      {key: 'apiKey', type: 'string'}
    ],
    test: (z, bundle) => {
      const promise = z.request('https://cypress-integrations-zapier-service-somzoktiod.now.sh/auth')
      return promise.then((response) => {
        if (response.status !== 200) {
          throw new Error('Invalid API Key')
        }
      })
    }
  },

  // beforeRequest & afterResponse are optional hooks into the provided HTTP client
  beforeRequest: [
    addApiKeyToHeader
  ],

  afterResponse: [
  ],

  // If you want to define optional resources to simplify creation of triggers, searches, creates - do that here!
  resources: {
  },

  // If you want your trigger to show up, you better include it here!
  triggers: {
    [testRun.key]: testRun,
    [failing.key]: failing,
    [passing.key]: passing,
    [projects.key]: projects
  },

  // If you want your searches to show up, you better include it here!
  searches: {
  },

  // If you want your creates to show up, you better include it here!
  creates: {
  }
};

// Finally, export the app.
module.exports = App;
