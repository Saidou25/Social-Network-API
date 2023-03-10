const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,

} = require('../../controllers/userController.js');

// /api/users

router
    .route('/')
    .get(getUsers)
    .post(createUser);

// /api/user/:userId

router
    .route('/:userId')
    .get(getSingleUser)
    .delete(deleteUser)
    .put(updateUser);

// /api/users/:userId/friends/:friendId

router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;