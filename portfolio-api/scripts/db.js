import con from "./connection.js"

try {
    await con.query(`CREATE DATABASE planning;`);
} catch (err) {
    if(err.code === 1007) {
        console.log("Database exists, no need to create it again")
    }
}

await con.query(`USE planning;`);

try {
    await con.query(`CREATE TABLE tasks (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(100),description VARCHAR(500),date DATE);`);
} catch (err) {
    if(err.code === 1050) {
        console.log("Table exists, no need to create it again")
    }
}

try {
    await con.query("CREATE DEFINER=`root`@`localhost` PROCEDURE `task_add_or_edit`(" +
        "\nIN _id INT, " +
        "\nIN _name VARCHAR(100), " +
        "\nIN _description VARCHAR(500), " +
        "\nIN _date Date)" +
        "\nBEGIN" +
        "\nIF _id=0 THEN" +
        "\nINSERT INTO tasks(name,description,date)" +
        "\nVALUES (_name,_description,_date);" +
        "\nELSE" +
        "\nUPDATE tasks" +
        "\nSET name = _name," +
        "\ndescription = _description," +
        "\ndate = _date" +
        "\nWHERE id = _id;" +
        "\nEND IF;" +
        "\nSELECT ROW_COUNT() AS 'affectedRows';" +
        "\nEND");
} catch (err) {
    if(err.code === 1304) {
        console.log("Procedure exists, no need to create it again")
    }
}

await con.query(`
    INSERT INTO tasks (name,description,date) 
    VALUES ('taskName1','taskDescription1','2024-1-12'),
    ('taskName2', 'taskDescription2', '2024-1-17'),
    ('taskName3', 'taskDescription3', '2024-1-22'),
    ('taskName4', 'taskDescription4', '2024-2-01'),
    ('taskName5', 'taskDescription5', '2024-4-16')`);

con.end();