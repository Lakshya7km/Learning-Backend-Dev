const express = require('express');
const router = express.Router();
const {getTasks,getTaskById,createTask,updateTask,deleteTask} =require('../Controllers/taskControllers')
//get
router.get('/',getTasks)
//get by id
router.get('/:id',getTaskById)
//post
router.post('/',createTask)
//put
router.put('/:id',updateTask)
//delete
router.delete('/:id',deleteTask)

module.exports = router