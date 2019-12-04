const SmeeClient = require('smee-client')

const smee = new SmeeClient({
  source: 'https://smee.io/PJ6soYc1UaL6Wt3p',
  target: 'http://jenkins.k8s.cluster.com/bitbucket-hook/',
  logger: console
})

const events = smee.start()

// Stop forwarding events
