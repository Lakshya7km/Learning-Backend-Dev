
const { getTasksService, createTaskService, getTaskByIdService,deleteTaskService,updateTaskService } = require('../Services/taskServices')

const getTasks = async (req, res) => {
    const result = await getTasksService();
    res.status(result.statusCode).json(result)
}

const getTaskById = async (req, res) => {
    const id = Number(req.params.id)
    const result = await getTaskByIdService(id);
    res.status(result.statusCode).json(result)
}


const createTask = async (req, res) => {
    const taskData = req.body;
    const result = await createTaskService(taskData);
    res.status(result.statusCode).json(result)
}
const updateTask = async (req, res) => {
    const id = Number(req.params.id)
    const task = req.body;
    const result = await updateTaskService(id, task);
    res.status(result.statusCode).json(result);
}

const deleteTask = async (req, res) => {
    const id = Number(req.params.id)
    const result = await deleteTaskService(id);
    res.status(result.statusCode).json(result);
}

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}