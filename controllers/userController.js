const userData = require('../utils/data');
const {User} = require('../models/User');

module.exports = {
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
           
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
            console.log(users);
    },

    getSingleUser(req, res) {
        User.findOne({ id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    }
};