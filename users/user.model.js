import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    }, 
    firstname: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true
    },
    hash: {
        type: String,
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

schema.set('toJson', { virtuals: true});

module.exports = mongoose.model('User', UserSchema);