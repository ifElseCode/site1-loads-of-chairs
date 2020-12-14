/* import required libraries */

const express = require('express') // load nodejs framework
const path = require('path') // utilities for working with file and directory paths
const cors = require('cors')
const bodyParser = require('body-parser') // parse request body

// initialize express
const app = express()
const port = parseInt(process.env.PORT, 10) || 3000

//serve public files
app.use(express.static('public'));
// enable cors
app.use(cors())

// API routes
app.get('/', (req, res) => {
    res.send('Welcome to Site1-loads-of-chairs!')
})


app.listen(port, () => {
    console.log(`> Server is running on http://localhost:${port}`)
})
