
const sqlite3 = require('sqlite3')

class AppDAO {
  constructor(dbFilePath = "sqlite3.db") {
    this.db = new sqlite3.Database(dbFilePath, (err) => {
      if (err) {
        console.log('Could not connect to database', err)
      } else {
        console.log('Connected to database')
      }
    })
  }

  run(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function (err) {
        if (err) {
          console.log('Error running sql ' + sql)
          console.log(err)
          reject(err)
        } else {
          console.log(this)
          resolve({ id: this.lastID })
        }
      })
    })
  }
  
  get(tableName, selectColumns = ['*']) {
    return new Promise((resolve, reject) => {

      // select column SQL
      let selectColumnSQL = ''

      for (let i in selectColumns) {
        if (i === selectColumns.length - 1) {
          selectColumnSQL += '${selectColumns[i]}'
        } else {
          selectColumnSQL += '${selectColumns[i]}, ' 
        }
      }

      const sql = 'SELECT ${selectColumnSQL} FROM ${tableName}'
      this.db.run()
    })
  }
}



const someDao = new AppDAO("some.db")
setTimeout(() => console.log(someDao, "someDao"), 1000)

someDao.run(`CREATE TABLE IF NOT EXISTS users(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT NULL)`)

someDao.run('INSERT INTO users(name) values("Amar"), ("Ravina")')
// console.log(someDao, "someDao")


// const someDao1 = new AppDAO("some.db")
// setTimeout(() => console.log(someDao1, "someDao"), 1000)

// const sqlite3Dao = new AppDAO("sqlite3.db")
// setTimeout(() => console.log(sqlite3Dao, "sqlite3Dao"), 1000)
// console.log(sqlite3Dao, "sqlite3Dao")

// console.log(someDao == someDao1)
