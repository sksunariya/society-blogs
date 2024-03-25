const express = require('express');
const userRoutes = express.Router();


const {signUp, sendOtp, login} = require('../controllers/Auth');
const { resetForgotPassword } = require('../controllers/ForgotPassword');
const {contact} = require('../controllers/Contact');


// Auth

userRoutes.post('/user/sendotp', sendOtp);
userRoutes.post('/user/signup', signUp);
userRoutes.post('/user/login', login);
userRoutes.post('/user/forgotPassword', resetForgotPassword);

userRoutes.post('/contact', contact);


module.exports = userRoutes;