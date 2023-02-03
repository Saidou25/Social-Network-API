const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: false,// has to be set to true
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,

        },
    }
)
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,

        },
        username: {
            type: String,
        },
        reactions: [reactionSchema],

    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

const Thought = model('thought', thoughtSchema);
const Reaction = model('reaction', reactionSchema);

module.exports = { Thought, Reaction };