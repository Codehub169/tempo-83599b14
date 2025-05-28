const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const dbPath = path.resolve(__dirname, 'hueneu.db');
const schemaPath = path.resolve(__dirname, 'schema.sql');

let db;

// Function to initialize the database
const initDb = () => {
  return new Promise((resolve, reject) => {
    const dbExists = fs.existsSync(dbPath);
    db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        console.error('Error opening database:', err.message);
        return reject(err);
      }
      console.log('Connected to the SQLite database.');

      // Read schema and create table if it doesn't exist
      fs.readFile(schemaPath, 'utf8', (err, schemaSql) => {
        if (err) {
          console.error('Error reading schema file:', err.message);
          return reject(err);
        }
        db.exec(schemaSql, (err) => {
          if (err) {
            console.error('Error creating table:', err.message);
            return reject(err);
          }
          console.log('Contacts table initialized successfully.');
          resolve(db);
        });
      });
    });
  });
};

// Function to add a contact form submission
const addContactSubmission = (name, email, message) => {
  return new Promise((resolve, reject) => {
    if (!db) {
      return reject(new Error('Database not initialized. Call initDb first.'));
    }
    const sql = `INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)`;
    db.run(sql, [name, email, message], function(err) {
      if (err) {
        console.error('Error inserting contact submission:', err.message);
        return reject(err);
      }
      resolve({ id: this.lastID });
    });
  });
};

module.exports = {
  initDb,
  addContactSubmission,
  getDb: () => db // Expose db instance if needed, though direct use is discouraged outside this module
};
