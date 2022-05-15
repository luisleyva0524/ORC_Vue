const modelUser = require('../controllers/controladorUsuarios');
const authUser = require('../auth/auth_verify');
// const verifyToken = require('../auth/verifyToken');
const express = require('express');
const router = express.Router();


router 
    .post('/signup', authUser.signUp)
    .post('/login', authUser.signIn)
    .get('/', modelUser.getUsers)  
    .put('/:id', modelUser.updateUser) 
    .delete('/:id', modelUser.deleteUser);

module.exports = router;