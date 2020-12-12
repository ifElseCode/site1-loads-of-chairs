/* import any required libraries here */
const express = require('express') // load nodejs framework

// initialize express
const app = express()
const port = parseInt(process.env.PORT, 10) || 3000

 //serve public files
app.use(express.static('public'));


// API routes
app.get('/', (req, res) => {
    res.send('Welcome to Site1-loads-of-chairs!')
})


app.listen(port, () => {
    console.log(`> Server is running on http://localhost:${port}`)
})
