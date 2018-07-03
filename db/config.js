const MongoClient = require('mongodb').MongoClient;
let db;
const uri = 'mongodb://db:27017/photos';


MongoClient.connect(uri, (err, client) => {
  if (err) console.error('db failed to connect ', err);
  db = client.db('photos')
  console.log('connected to db')
})

const getdb = () => {
  return db
}

module.exports = {
  getdb
}