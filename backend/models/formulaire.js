const express = require('express');
const mongoose = require('mongoose');
const nodemon = require('nodemon');
const concurrently = require('concurrently');
const cors = require('cors');

//Schema : squelette de l'API qu'on veut créer
const Schema = mongoose.Schema;
const FormSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});

//On déclare et créé un modèle d'API
const Form = mongoose.model('Form', FormSchema);


module.exports = Form;