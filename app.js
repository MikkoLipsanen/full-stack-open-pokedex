const express = require('express')
// import express
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

// middleware for serving static files
app.use(express.static('dist'))

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`server started on port ${PORT}`)
  /* eslint-enable no-console */
})

// endpoint for health checks, output is 'ok'
app.get('/health', (_req, res) => {
  res.send('ok')
})