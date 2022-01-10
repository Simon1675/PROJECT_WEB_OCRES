const express = require('express');
const mongoose = require('mongoose');
const nodemon = require('nodemon');
const concurrently = require('concurrently');
const cors = require('cors');

const Form = require('../models/formulaire');
const router = express.Router();

//Création de l'API api
router.get('/', (req, res) => {
    const data = {
        titre: 'beerpong3D',
        des: 'jeu video'
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

//Envoie les données au server
router.post('/save', (req, res) => {
    console.log('Body: ', req.body);

    const newForm = new Form(data);
    res.json({
        msg: 'Bien reçu !'
    });
})

newForm.save((erro) => {
    if(error){
        res.status(200).json({msg: 'erreur'});
        return;
    }
    else {
        return res.json({
            msg: 'Bien reçu !'
        })
    }
})

//Création de l'Api name
router.post('/name', (req, res) => {
    const data = {
        titre: 'jeu de plateforme',
        des: 'saut avec espace'
    };
    res.json(data);
});

router.use(cors());
module.exports = router;
