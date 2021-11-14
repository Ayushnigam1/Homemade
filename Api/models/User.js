var mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    Name: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true,
        unique: true
    },
    Pasward: {
        type: String,
        require: true
    },
    Date: {
        type: Date,
        default: Date.now
    }
});
const User = mongoose.model('user', UserSchema);
User.createIndexes();
module.exports = User;