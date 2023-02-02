const connection = require('../config/connection');
const { userData, thoughtData } = require('./data');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');


    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = await User.insertMany(userData);
    await Thought.insertMany(thoughtData);

    console.log(users);
    console.info('seeding complete');
    process.exit(0);
});