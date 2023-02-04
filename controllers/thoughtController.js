
const Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .select('-__v')
            .then((thoughts) => res.json(thoughts))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thoughts) =>
                !thoughts
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(thoughts)
            )
            .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { username: req.body.username },
                    { $addToSet: { thoughts: thought._id } },
                    { runValidators: true, new: true }

                )
            })
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    deleteThought(req, res) {
        Thought.deleteOne({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json('thought deleted')
            )
            .catch((err) => res.status(500).json(err));
    },
    updateThought(req, res) {

        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true },
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true },
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { _id: req.params.reactionId } } },
            { runValidators: true, new: true },
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
};