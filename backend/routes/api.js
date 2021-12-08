const express = require('express');
const mongoose = require('mongoose');
const nodemon = require('nodemon');
const concurrently = require('concurrently');

const Form = require('../models/formulaire');
const router = express.Router();

//Création de l'API api
router.get('/', (req, res) => {
    const data = {
        username: 'hugo',
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

router.post('/save', (req, res) => {
    console.log('Body: ', req.body);
    res.json({
        msg: 'Bien reçu !'
    });
})

//Création de l'Api name
router.post('/name', (req, res) => {
    const data = {
        username: 'simon',
        age: 22
    };
    res.json(data);
});

module.exports = router;
