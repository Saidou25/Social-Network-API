const connection = require('../config/connection');
const { userData, thoughtData } = require('./data');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    
    await User.deleteMany({});
    await User.insertMany(userData);
  
    
    await Thought.deleteMany({});
    await Thought.insertMany(thoughtData);
   
    process.exit(0);

});

console.log(userData);
console.log(thoughtData);
console.info('seeding complete');

