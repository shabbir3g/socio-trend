const {Schema,model} = require('mongoose');
const friendSchema = new Schema({
    friendId: String,
    requestStatus: {
        type: String,
        default: 'pending',
    },
    send: {
        type: Boolean,
        default: false,
    }
});


module.exports = friendSchema;