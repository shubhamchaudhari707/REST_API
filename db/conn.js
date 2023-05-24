
const mongoose = require('mongoose')

const DB = `mongodb+srv://shubham:shubham@cluster0.f443k.mongodb.net/Rest_Pratise1?retryWrites=true&w=majority`;

mongoose.connect(DB, {

    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true

}).then(() => {
    console.log('connection sucessful ... !')
}).catch(() => {
    console.log('no connection')
})