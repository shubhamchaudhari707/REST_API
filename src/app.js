const express = require('express')
const app = express()
require("../db/conn")
const port = process.env.PORT || 3000



const StudentRouter = require("./router/router_student")

app.use(express.json())
app.use(StudentRouter)

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})



app.listen(port, () => {
    console.log(`server is running http://localhost:${port}`)
})