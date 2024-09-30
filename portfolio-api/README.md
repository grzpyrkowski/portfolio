# Portfolio - server-side

This part of [portfolio](https://github.com/grzpyrkowski/portfolio) is backend of an application. \
It also connects with MySql and provides initial data to database.

---

## Create database and run server

1. Open terminal and type \
npm start \
to download all libraries and start the app.
2. Install and configure [MySql](https://dev.mysql.com/downloads/) on your pc.
3. Open [connection.js](scripts/connection.js) file and use your credentials to configure connection with MySql database. \
    This is possible that you will have to grant permissions to your user, if so, run this query in **_MySql_**: \
    ALTER USER 'foo'@'localhost' IDENTIFIED WITH mysql_native_password BY 'bar';
4. Run 
    ### `db.js`
    to get initial data to display on site. \
    Running script again will cause duplicating rows in database.
5. Run 
    ### `server.js` 
    to start the server.


## Content description

When server is running, content is displayed in application in Board tab. \
There is also a possibility to perform CRUD operations. \
If you need a help in running the app, check [README](../portfolio-client/README.md) in portfolio-client directory.
