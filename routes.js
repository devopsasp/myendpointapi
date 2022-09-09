const express = require('express')
const router = express.Router()
var myarray = require('./itemarray')



router.get("/finditem/:id", function(req, res) {
    var id = req.params.id
    var obj = myarray.filter((e) => e.itemId == id)
    res.send(obj)
})

router.get("/getitem", function(req, res) {
    res.send(myarray)
})

router.post("/saveitem", function(req, res) {

    myarray = [...myarray, req.body]
    res.send("item added")

})
router.patch("/update", function(req, res) {

    var newarray = myarray.filter((e) => e.itemId != req.body.itemId)

    myarray = [...newarray, req.body]

    res.send("item updated")
})
router.delete("/delete", function(req, res) {

    var newarray = myarray.filter((e) => e.itemId != req.body.itemId)

    myarray = [...newarray]
    res.send("item delted")
})

module.exports = router