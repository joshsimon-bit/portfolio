'use strict'    

const express = require('express');
const router = express.Router();

router.get('/', async(req,res)=> {

    res.render('template', {
        local: {
            title: 'Joshua Simon',
        },
        partials:{
            body:'partials/home',
        }
    });
});

module.exports = router;