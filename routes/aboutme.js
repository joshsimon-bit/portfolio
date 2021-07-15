'use strict'    

const express = require('express');
const router = express.Router();

router.get('/', async(req,res)=> {

    res.render('template', {
        locals: {
            title: "About Me",
        },
        partials:{
            body:'partials/aboutme',
        }
    });
});

module.exports = router;