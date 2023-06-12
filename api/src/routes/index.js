const express = require('express');
const router = express.Router();
const {getLists, addList, getListById, getIcons, getColors, deleteListById, addTodo} = require('../controllers/todoController');

router.get('/lists', getLists);
router.post('/lists', addList);
router.get('/lists/:listId', getListById);
router.get('/icons', getIcons);
router.get('/colors', getColors);
router.delete('/lists/:listId', deleteListById);
router.post('/todos', addTodo);
module.exports = router;