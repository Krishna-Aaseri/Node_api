const sqlite3 = require('sqlite3')  
const Promise = require('bluebird')

class AppDAO {  
  constructor(dbFilePath) {
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
          resolve({ id: this.lastID })
        }
      })
    })
  }
}

const someDao = new AppDAO("mydb.db")
setTimeout(() => console.log(someDao, "someDao"), 1000)

someDao.run(`CREATE TABLE IF NOT EXISTS users(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT NOT NULL)`)

someDao.run('INSERT INTO users(name, email) values("Amar","amar17@navguruku.org"), ("ankita", "ankita17@navgurukul.org")')  