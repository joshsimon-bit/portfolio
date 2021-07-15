'use strict'    

const express = require('express');
const router = express.Router();

router.get('/', async(req,res)=> {

    res.render('template', {
        local: {
            title: "About Me",
        },
        body:{
        partials:'partials/aboutme',
        }
    });
});

module.exports = router;