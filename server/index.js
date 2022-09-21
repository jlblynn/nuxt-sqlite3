const express = require('express')
const bodyParser = require('body-parser')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const Sequelize = require('sequelize');

// Models index file returns a sequelize object
const {sequelize} = require('./models')

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Import routes
app.use(require('./controllers'))
//require('./routes')(app)

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Test the db connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync({force: false})
  .then(() => {
    console.log(`Server started`)
  })

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
