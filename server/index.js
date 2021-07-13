const app = require('./server')

const PORT = process.env.PORT || 1813

const init  = ( ) => {

  app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))
}

init()