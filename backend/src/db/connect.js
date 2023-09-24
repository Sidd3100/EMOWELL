const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/emoDB", {
    //this will help in getting rid of depreceation warnings.
    useNewUrlParser: true
    // useUnifiedTopology:true,
    // useCreateIndex:true 
}).then(() => {
    console.log('connection successful');
}).catch((e) => {
    console.log('no connection'); //in case of error.
});

const RegisterSchema= new mongoose.Schema({
    first
})