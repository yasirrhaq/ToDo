const express = require('express')
const mysql = reuire('mysql')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index.js');
})