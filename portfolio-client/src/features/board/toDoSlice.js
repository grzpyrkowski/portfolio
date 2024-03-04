import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const client = axios.create({
    baseURL: "http://localhost:4000/api/tasks"
});

const initialState = {
    tasks: [],
    status: "idle"
}

export const getTask = createAsyncThunk('tasks/getTask', async(task) => {
    const { id } = task;
    const res = await client.get(`${id}`);
    return [...res.data];
})

export const getAllTasks = createAsyncThunk('tasks/getAllTasks', async() => {
    const res = await client.get('');
    return [...res.data];
})

export const createTask = createAsyncThunk('tasks/createTask', async(task) => {
    try {
        const res = await client.post('', task);
        return res.data;
    } catch (err) { console.error(err) }
})

export const updateTask = createAsyncThunk('tasks/updateTask', async(task) => {
    const { id } = task;
    try {
        const res = await client.put(`${id}`, task);
        return res.data;
    } catch (err) { console.error(err) }
})

export const deleteTask = createAsyncThunk ('tasks/deleteTask', async(task) => {
    const { id } = task;
    try {
        const res = await client.delete(`${id}`);
        if(res.status === 200) return task
    } catch (err) { console.error(err) }
})

const toDoSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getTask.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getTask.fulfilled, (state, action) => {
                state.status = "success";
                return action.payload;
            })
            .addCase(getTask.rejected, (state) => {
                state.status = "error";
            })
            .addCase(getAllTasks.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllTasks.fulfilled, (state, action) => {
                state.status = "success";
                const tasks = action.payload.map(task => {
                    task.date = task.date.slice(0,10)
                    return task;
                })
                state.tasks = state.tasks.concat(tasks)
            })
            .addCase(getAllTasks.rejected, (state) => {
                state.status = "error";
            })
            .addCase(createTask.pending, (state) => {
                state.status = "loading";
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.status = "success";
                try {
                    state.tasks.push(action.payload)
                } catch (err) {console.error(err)}
            })
            .addCase(createTask.rejected, (state) => {
                state.status = "error";
            })
            .addCase(updateTask.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                state.status = "success";
                const { id } = action.payload;
                const tasks = state.tasks.filter(task => task.id !== id)
                state.tasks = [...tasks, action.payload];
            })
            .addCase(updateTask.rejected, (state) => {
                state.status = "error";
            })
            .addCase(deleteTask.pending, (state) => {
                state.status = "loading";
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.status = "success";
                if (!action.payload.id) {
                    console.log('Task could not be deleted')
                    return;
                }
                const { id } = action.payload;
                state.tasks = state.tasks.filter(task => task.id !== id);
            })
            .addCase(deleteTask.rejected, (state) => {
                state.status = "error";
            })
    }
});

export const selectAllTasks = (state) => state.tasks.tasks;
export const getStatus = (state) => state.tasks.status;

export default toDoSlice.reducer;