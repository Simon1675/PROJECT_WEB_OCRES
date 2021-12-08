import express from 'express'
import DataStore from 'nedb'
import morgan from 'morgan'
import mongoose from 'mongoose'
import nodemon from 'nodemon'
import concurrently from 'concurrently'
import { Double } from 'bson'


//On lance express
const app = express()
const PORT = process.env.PORT || 8000 //Création du port 8000

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

//Schema : squelette de l'API qu'on veut créer
const Schema = mongoose.Schema;
const FormSchema = new Schema({
    name: String,
    ticktock_time: Number,
    age: Number,
});

//On déclare et créé un modèle d'API
const Form = mongoose.model('Form', FormSchema);

const newForm = new Form(data); //Déclaration d'une instance du modèle

//Données enregistrées dans la bdd
const data = {
    name: 'Simon',
    ticktock_time: 2,
    age: 22,
};

//Vérification de l'enregistrement des données
newForm.save((error) => {
    if(error) {
        console.log('Ooooops, my bad !');
    }
        else{
            console.log('Data has been saved!');
        }
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

//API

//Création de l'API api
app.get('/api', (req, res) => {
    const data = {
        username: 'hugo',
        time_on_ticktok: 2,
        age: 21
    };
    //On vérifie que les exemples d'api sont enregistrées dans la bdd
    Form.find({ })
        .then((data) => {
            console.log('Data', data);
            res.status(200).json(data);
        })
        .catch((error) => {
            console.log('error');
        });
});

//Création de l'Api name
app.get('/api/name', (req, res) => {
    const data = {
        username: 'simon',
        time_on_ticktock: 2,
        age: 22
    };
    res.json(data);
});
