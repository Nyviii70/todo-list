const express = require('express');
const router = express.Router();
const {
    getLists, addList,
} = require('../controllers/todoController');

//router.route('/todos').get(getLists).post(addList);
router.get('/todos',getLists);
router.post('/todos',addList);

module.exports = router;