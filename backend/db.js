const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/?directConnection=true&readPreference=primary"

const connentToMongo = () =>{
    mongoose.connect(mongoURI, () =>{
        console.log ("connected to mongoose")
    })
}

module.exports = connentToMongo