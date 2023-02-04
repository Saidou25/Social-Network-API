const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            Unique: true,
            Required: true,
            Trimmed: true,
        },
        email: {
            type: String,
            Required: true,
            match: /.+\@.+\..+/,
            Unique: true,
        },
        thoughts: {
            type: [Schema.Types.ObjectId],
            ref: 'thought'

        },
        friends: {
            type: [Schema.Types.ObjectId],
            ref: 'user',

        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;