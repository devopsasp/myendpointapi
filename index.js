const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
app.use(express.json())
app.use(cors())

app.use("/item", routes)
app.listen(5000, function(req, res) {
    console.log("server started")
})