const express = require('express')
const router = new express.Router()
const Student = require("../../models/student")

router.get('/', (req, res) => {
    res.send('Hello whats guys')
})

// create user
router.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body)
        const createUser = await user.save()
        res.status(200).send(createUser);
    }
    catch (err) {
        console.log(err)
    }
})


// all data drom database
router.get("/students", async (req, res) => {
    try {
        const data = await Student.find({})

        console.log(data)
        res.send(data)
    }
    catch (err) {
        console.log(err)
    }
})

// get the individual Student data using id
app.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id
        // console.log(req.params)
        const stuData = await Student.findById({ _id: _id })
        res.send(stuData)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }

})


router.patch("/students/:id", async (req, res) => {
    try {

        const _id = req.params.id
        const dataupdate = await Student.findByIdAndUpdate({ _id: _id }, req.body, { new: true })
        console.log(dataupdate)
        res.send(dataupdate)
    }
    catch (err) {
        console.log(err)
    }
})


router.delete("/students/:id", async (req, res) => {
    try {

        const _id = req.params.id
        const deletedata = await Student.deleteOne({ _id: _id })
        console.log(deletedata)
        res.send(deletedata)
    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router