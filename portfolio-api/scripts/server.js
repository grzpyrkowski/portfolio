// MySQL issue - query which need to be executed before whole script to establish connection with existing user in database
// ALTER USER 'foo'@'localhost' IDENTIFIED WITH mysql_native_password BY 'bar';
import express from 'express';
import bodyParser from "body-parser";
import corsMiddleware from "../cors/index.js";
import tasksRoutes from '../controllers/task.controller.js';
import con from './connection.js';
import cors from "cors";

const app = express();

//middleware
app.use(bodyParser.json())
app.options('*', cors()); //pre-flight
app.use(corsMiddleware)
app.use('/api/tasks', tasksRoutes);
app.use(express.static('public'));

con.query(`USE planning;`)
    .then((result) => {
        app.listen(4000,
            () => console.log(result))
    })
    .catch(err => console.error(`error: ${err.message}`));
