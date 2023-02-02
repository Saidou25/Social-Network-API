const connection = require('../config/connection');
const userData = require('./data');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});

    User.find({}).exec((err, collection) => {
        if (collection.length === 0) {
            User.Collection.insertMany(userData)
        }
    });
    console.log(userData);
    console.info('seeding complete');
    process.exit(0);
});