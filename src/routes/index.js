const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.send({
        message :'Welcome to server Tracking'
    })
});

module.exports = router;