const express = require('express');

const router = express.Router()

module.exports = router;

router.get('/projects', async (req, res) => {
    console.log('GET ALL PROJECT.');
})
