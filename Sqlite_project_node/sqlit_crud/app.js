const sqlite3 = require('sqlite3')
let db = new  sqlite3.Database("./myDB.sqlite3", (err) => {
    if (err) {
        console.log('error when creting databse', err)
    }else{
        console.log('databse created')
        createTable()
    }
})
const createTable = () => {
    console.log("create database table contacts");
    db.run("CREATE TABLE IF NOT EXISTS contacts(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)",  insertData);
}
const insertData = () =>{
    console.log("Insert data")
    db.run('INSERT INTO contacts (name) VALUES (?)', ["contact 001"]);
}
read = () => {
    console.log("Read data from contacts");
    db.all("SELECT rowid AS id, name FROM contacts", function(err, rows) {
        rows.forEach(function (row) {
            console.log(row.id + ": " + row.name);
        });
    });
}
db.close();