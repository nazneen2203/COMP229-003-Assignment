//1HQDHJGvwsFNTWPe
//"mongodb+srv://appuser:1HQDHJGvwsFNTWPe@cluster003-m2022.vwekihi.mongodb.net/admin"
let atlasDB = "mongodb+srv://appuser:1HQDHJGvwsFNTWPe@cluster003-m2022.vwekihi.mongodb.net/businesses?retryWrites=true&w=majority";
//2wQ0ogCixxTgCWSA//laila
//mongodb+srv://laila:2wQ0ogCixxTgCWSA@cluster003-s2022.omgsspd.mongodb.net/test
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
