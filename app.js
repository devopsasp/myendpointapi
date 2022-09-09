const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const port = process.env.PORT || 3001;
app.use(express.json())
app.use(cors())

app.use("/item", routes)
app.listen(port, function(req, res) {
    console.log("server started")
})