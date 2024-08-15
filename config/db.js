const mongoose = require('mongoose')

const configureDB = ()=>{mongoose.connect('mongodb://127.0.0.1:27017/Counter-app-mar-24')
    .then(()=>{
        console.log('DB connected')
    })
    .catch((err)=>{
        console.log('error to connect DB',err)
    })
}

module.exports = configureDB