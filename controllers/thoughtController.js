
const thoughts = require('../utils/data');
const Thought = require('../models/User');
const Reaction = require('../models/User');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((dbthoughtData) => res.json(dbthoughtData))
            .catch((err) => res.status(500).json(err));
    },
    deleteThought(req, res) {
        Thought.deleteOne({ _id: req.params.id })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    updateTought(req, res) {

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
};
