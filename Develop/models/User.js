const { Schema, model } = require('monngoose');

const userSchema = new Schema(
    {
        usename: {
            type: String,
            Unique: true,
            Required: true,
            Trimmed: true,
        },
        email: {
            type: String,
            Required: true,
            Unique: true,
            $match
        },
        thoughts: {

        },
        fdriends: {

        },
        
    },
    {
        toJSON: {
          getters: true,
        },
      }
);

const User = model('user', userSchema);

module.exports = User;