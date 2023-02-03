const connection = require('../config/connection');
const { userData, thoughtData } = require('./data');
const { User } = require('../models');
const { Thought } = require('../models');
connection.on('error', (err) => err);

const users = [];
const thoughts = [];

connection.once('open', async () => {
    console.log('connected');
    
    await User.deleteMany({});
    const allUsers = await User.insertMany(userData);
    users.push(allUsers);
    
    // await Thought.deleteMany({});
    // const allThoughts = await Thought.insertMany(thoughtData);
    // thoughts.push(allThoughts);

    console.log(users);
    console.log(thoughts);
    console.info('seeding complete');
    process.exit(0);
});

module.exports = { users, thoughts };
