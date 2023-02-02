const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        userName: {
            type: String,
            Unique: true,
            Required: true,
            Trimmed: true,
        },
        email: {
            type: String,
            Required: true,
            // match: /.+\@.+\..+/,
            Unique: true,          
        },
        // thoughts: {
        //     type: [Schema.Type.ObjectId],
        //     ref: 'Thought'
            
        // },
        // friends: {
        //     type: [Schema.Type.ObjectId],
        //     ref: 'User',

        // },
        
    },
    // {
    //     toJSON: {
    //       getters: true,
    //     },
    //   }
);

const User = model('user', userSchema);

module.exports = User;