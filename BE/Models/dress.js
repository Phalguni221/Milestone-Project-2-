const mongoose = require('mongoose')


var DressSchema = new mongoose.Schema({
    id: {type: Number, default: 'Anonymous' },
    img: {type: String, default:''},
    title: { type: String, default: 'Anonymous' },
    stars: { type: Number, required: true },
})

DressSchema.methods.showEstablished = function() {
    console.log("dress database successful")
}
  
module.exports = mongoose.model('Dresses', DressSchema)

