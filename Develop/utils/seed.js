const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');


    await User.deleteMany({});
    await Thought.deleteMany({});

    await User.Collection.insertMany(users);

const user = [];

    console.table(users);
    console.info('Seeding complete');
    process.exit(0);

});