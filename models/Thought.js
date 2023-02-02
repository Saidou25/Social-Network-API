const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughText: {
            type: String,
            required: true,
            // must be between 1 and 280 charactes,
        },
        crearedAt: {
            type: Date,
            default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
        },
        username: {
            type: String,
            required: true,
        },
        // reacrions: {
        //     Array of nested documents created with the reactionSchema
        // }
    },
    {
        toJSON: {
            virtuals: true,
        },

    }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;