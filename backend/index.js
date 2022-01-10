const express = require('express');
const mongoose = require('mongoose');
const nodemon = require('nodemon');
const concurrently = require('concurrently');
const cors = require('cors');
const path = require('path');

const DataStore = require('nedb')

const routes = require('./routes/api')
//On lance express
const app = express()
const PORT = process.env.PORT || 8000 //Création du port

app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port : ${PORT}`) //On compile le backend sur le port localhost:8000
});

//BDD
const db = new DataStore({ filename: 'stat' })
db.loadDatabase()

//ID Password
//SimonHugo
//simon_hugo_groupe6

//On stocke l'URI qui permet d'accéder à la bdd dans une variable
const MONGODB_URI = 'mongodb+srv://SimonHugo:simon_hugo_groupe6@pepitedb.nxjv8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//On connecte le backend à la bdd
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//On vérifie que la connexion est établie
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});


app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors());
app.use('/api', routes);