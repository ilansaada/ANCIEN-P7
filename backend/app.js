const express = require('express');
/*const sequelize = require('sequelize');*/
const path = require('path');
/*----------------------------------importation du routeur-----------------------------*/
const userRoutes = require('./routes/user');
const messageRoutes = require('./routes/message');

const app = express();
/*-------------------------------------------Déf des CORS lien backend et frontend ------------------------------------------*/

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/message', messageRoutes);
module.exports = app;
