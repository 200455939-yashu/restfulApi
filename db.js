//Requiring the mongoose
const mongoose = require('mongoose');

//connecting to the mongo cluster 
const MONGOURI = "mongodb+srv://yashu:910210@cluster0.58vtb.mongodb.net/sample_training?retryWrites=true&w=majority";

//initialisting the mongo server asynchronosly
const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to DB !!");
    } catch (e){
        console.log(e);
        throw e;
    }
};

module.exports = InitiateMongoServer;