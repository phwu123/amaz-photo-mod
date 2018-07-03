const { getdb } = require('../../db/config.js');

const pictureController = {
  'getId':((req, res) => {
    // console.time('findone')
    let db = getdb() 
    db.collection('pics').findOne({id: req.params.id}, (err, data) => {
      if (err) console.log('err in get ', err);
      // console.timeEnd('findone');
      res.status(200).send([data]);
    })
  }),
  'makeCat': ((req, res) => {
    // console.time('make cat')
    // db.collection('pics').insert(req.params, (err, data) => {
    //   if (err) console.log('err in get ', err);
    //   console.timeEnd('make cat');
    //   res.status(201).send([data]);
    // })
  }),
  'updatePicById':((req, res) => {
  }),
  'updatePicByName':((req, res) => {
  }),
  'getName':((req, res) => {
  }),
  'updateByName': ((req, res) => {
    // db.collection('pics').update({product_name: req.params.name}, {$set: {}}, (err, data) => {
    //   if (err) console.log('err in name update ', err);
    //   console.log('update done ? ', req.params.name)
    //   res.status(200).send(data);
    // })
  }),
  'deleteNameByName': ((req, res) => {
  }),
  'updateNameById': ((req, res) => {

  }),
  'deleteNameById': ((req, res) => {

  }),
}

module.exports = {pictureController}
