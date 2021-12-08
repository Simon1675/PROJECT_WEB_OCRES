//import express from 'express'
//import DataStore from 'nedb'
//import morgan from 'morgan'
//import mongoose from 'mongoose'
//import nodemon from 'nodemon'
//import concurrently from 'concurrently'
//import { Double } from 'bson'
//import routes from './routes/api.js';
const express = require('express');
const mongoose = require('mongoose');
const nodemon = require('nodemon');
const concurrently = require('concurrently');
const cors = require('cors');

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


app.use(express.json())

//On a vu que l'accès au localhost:8000 du coup on a écrit ce code qui permet de libérer l'accès
app.all('/:id', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Method", "GET, POST, OPTION");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next()
  });
  app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Method", "GET, POST, OPTION");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next()
  });


app.use(cors());
app.use('/api', routes);