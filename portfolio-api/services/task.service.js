import con from '../scripts/connection.js';

export async function getAllTasks() {
    const [rows] = await con.query("SELECT * FROM tasks")
        .catch(err => console.error(`error:  ${err.message}`))
    return rows;
}

export async function getTaskById(id) {
    const [row] = await con.query("SELECT * FROM tasks WHERE id = ?",[id]) //sql injection protection
        .catch(err => console.error(`error:  ${err.message}`))
    return row;
}

export async function deleteTask(id) {
    const [row] = await con.query("DELETE FROM tasks WHERE id = ?",[id])
        .catch(err => console.error(`error:  ${err.message}`))
    return row.affectedRows;
}

export async function addOrEdit(obj, id=0) {
    const [row] = await con.query("CALL task_add_or_edit(?,?,?,?)",
        [id, obj.name, obj.description, obj.date])
        .catch(err => console.error(`error:  ${err.message}`))
    return row.affectedRows;
}