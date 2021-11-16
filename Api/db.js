const mongoose = require("mongoose");
const uri = "mongodb+srv://mongo:mongo@cluster0.qmfui.mongodb.net/homemade?retryWrites=true&w=majority";
const connectToMongo = () => {
    mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true})
    .then(()=>{console.log("mongo connect")});
    
};

module.exports=connectToMongo;