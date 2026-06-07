const fs = require('fs/promises');
const path = require('path')

const filePath = path.join(__dirname, "../Database/tasks.json")


// task={
// id:1,taskName:"abc","Due":Date,status:pending/in progress/completed
//  }

const createTaskService = async (taskData) => {
    const { taskName, dueDate, status } = taskData;
    if (!taskName || !dueDate) {
        return {
            success: false,
            statusCode: 400,
            message: "All fields are required"
        }
    }
    try {
        const data = await fs.readFile(filePath, "utf-8");
        const tasks = JSON.parse(data);
        const task = {
            id: tasks.length + 1,
            taskName,
            dueDate,
            status: status || "pending"
        }

        tasks.push(task)
        const newTask = JSON.stringify(tasks, null, 2);
        await fs.writeFile(filePath, newTask)
        return {
            success: true,
            statusCode: 201,
            message: "Task created",
            task
        }
    } catch (err) {
        console.log(err)
        return {
            success: false,
            statusCode: 500,
            message: "Internal Server Error"
        };
    }


}


const getTasksService = async () => {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        const tasks = JSON.parse(data);

        return {
            success: true,
            statusCode: 200,
            message: "Tasks fetched",
            tasks
        };
    } catch (err) {

        console.log(err)
        return {
            success: false,
            statusCode: 500,
            message: "Internal Server Error"
        };
    }
};

const getTaskByIdService = async (id) => {

    const Data = await fs.readFile(filePath, "utf-8");
    const taskData = JSON.parse(Data);
    const taskDataById = taskData.find(t => t.id === id)
    if (!taskDataById) {
        return {
            success: false,
            statusCode: 404,
            message: "Task not found"
        }
    } else {
        return {
            success: true,
            statusCode: 200,
            message: `Task fetched by id ${id}`,
            task: taskDataById
        }
    }

}


const updateTaskService = async (id, task) => {
    const { taskName, dueDate, status } = task;
    if (!taskName || !dueDate || !status) {
        return {
            success: false,
            statusCode: 400,
            message: "ALL fields are required"
        }
    }

    try {
        const data = await fs.readFile(filePath, "utf-8");
        const tasks = JSON.parse(data);
        const oldTasks = tasks.find(t => t.id === id);
        if (!oldTasks) {
            return {
                success: false,
                statusCode: 404,
                message: "task not found"
            }
        }
        oldTasks.taskName = taskName
        oldTasks.dueDate = dueDate
        oldTasks.status = status

        await fs.writeFile(filePath, JSON.stringify(tasks, null, 2))
        return {
            success: true,
            statusCode: 200,
            message: "Tasks updated",
            tasks
        };
    } catch (err) {

        console.log(err)
        return {
            success: false,
            statusCode: 500,
            message: "Internal Server Error"
        };
    }


}

const deleteTaskService = async (id) => {
    try {

        const data = await fs.readFile(filePath, "utf-8");

        const tasks = JSON.parse(data);
        const task = tasks.find(u => u.id === id);
        if (!task) {
            return {
                success: false,
                statusCode: 404,
                message: "task not found"
            }
        }
        const remainedTasks = tasks.filter(t => t.id !== id);
        await fs.writeFile(filePath, JSON.stringify(remainedTasks, null, 2));
        return {
            success: true,
            statusCode: 200,
            message: "Tasks deleted",
            remainedTasks: remainedTasks
        };


    } catch (err) {

        console.log(err)
        return {
            success: false,
            statusCode: 500,
            message: "Internal Server Error"
        };
    }
}
module.exports = {
    getTasksService,
    createTaskService,
    getTaskByIdService,
    deleteTaskService,
    updateTaskService

}
