const express = require('express');
const router = express.Router();
const {getLists, addList, getListById} = require('../controllers/todoController');

router.get('/lists', getLists);
router.post('/todos', addList);
router.get('/lists/:listId', getListById)
module.exports = router;