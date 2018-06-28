const MongoClient = require('mongodb').MongoClient;
let db = null;
const uri = 'mongodb://localhost:27017/photos';

MongoClient.connect(uri, (err, client) => {
  if (err) console.error('db failed to connect');
  db = client.db('photos');
  console.log('connected to db ')
})

const pictureController = {
  'getId':((req, res) => {
    console.time('findone')
    db.collection('pics').findOne({imageId: Number(req.params.id)}, (err, data) => {
      if (err) console.log('err in get ', err);
      console.log('data ', data);
      console.timeEnd('findone')
      res.status(200).send([data]);
    })
  }),
  'updatePicByName':((req, res) => {
    db.collection('images').update({})
  }),
  'getName':((req, res) => {
  }),
  'updatePicById':((req, res) => {
  }),
  'updateByName': ((req, res) => {
    db.collection('images').update({product_name: req.params.name}, {$set: {}}, (err, data) => {
      if (err) console.log('err in name update ', err);
      console.log('update done ? ', req.params.name)
      res.status(200).send(data);
    })
  }),
  'deleteNameByName': ((req, res) => {
  }),
  'updateNameById': ((req, res) => {

  }),
  'deleteNameById': ((req, res) => {

  }),
}

module.exports = {pictureController}
