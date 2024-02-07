import express from 'express';
import * as service from '../services/task.service.js'

const router = express.Router();

router.get('/', async (req,res) => {
    const tasks = await service.getAllTasks()
    res.send(tasks)
});

router.get('/:id', async (req,res) => {
    const task = await service.getTaskById(req.params.id);
    if(task.length === 0)
        res.status(404).json('No task with given id');
    else
        res.send(task);
});

router.delete('/:id', async (req,res) => {
    const task = await service.deleteTask(req.params.id);
    if(task === 0)
        res.status(404).json('No task with given id');
    else
        res.send('task deleted');
});

router.post('/', async (req,res) => {
    await service.addOrEdit(req.body);
    // res.status(201).send("Task created successfully");
});

router.put('/:id', async (req,res) => {
    const task = await service.addOrEdit(req.body, req.params.id);
    res.status(201).send('Task updated successfully');
});

export default router;