const express = require('express');

const router = express.Router();

const { getAnträge } = require('../controllers/data');

router.get('/anträge', getAnträge);

module.exports = router;
