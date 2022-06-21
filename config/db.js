//link to add mongodb
let atlasDB = "mongodb+srv://appuser:1HQDHJGvwsFNTWPe@cluster003-m2022.vwekihi.mongodb.net/businesses?retryWrites=true&w=majority";

// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}
