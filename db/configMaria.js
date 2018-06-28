const mysql = require('mysql2');
const { pictureController } = require('../server/controllers/pictureController.js');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'photos',
  dialect: 'mysql',
  port: '3306',
  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000
  // }
})

db.connect(() => {    
  console.log('connected to db')
})

module.exports = {db}