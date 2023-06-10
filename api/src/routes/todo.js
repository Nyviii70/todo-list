const express = require('express');
const router = express.Router();
const {
    getLists,
} = require('../controllers/todoController');

router.route('/').get(getLists);

module.exports = router;