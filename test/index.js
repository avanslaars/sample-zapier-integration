const assert = require('assert')

const zapier = require('zapier-platform-core')

// Use this to make test calls into your app:
const App = require('../index')
const appTester = zapier.createAppTester(App)

describe('My App', () => {

  it('should load the latest test run', (done) => {
    const bundle = {}

    appTester(App.triggers.testrun.operation.perform, bundle)
      .then(results => {
        assert.ok(results.length)
        done()
      })
      .catch(done)
  })

})
