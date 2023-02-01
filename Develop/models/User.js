const { Schema, model } = require('monngoose');

const userSchema = new Schema(
    {
        usename: {
            type: String,
            Unique: true,
            Required: true,
            Trimmed: true,
        },
        // email: {
        //     type: String,
        //     Required: true,
        //     match: /.+\@.+\..+/,
        //     Unique: true,
            
        // },
        // thoughts: {
        //     type: [Schema.Type.ObjectId],
        //     ref: 'Thought'
            
        // },
        // friends: {
        //     type: [Schema.Type.ObjectId],
        //     ref: 'User',

        // },
        
    },
    {
        toJSON: {
          getters: true,
        },
      }
);

const User = model('user', userSchema);

module.exports = User;