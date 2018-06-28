const { db } = require('../../db/config.js');

const pictureController = {
  'getId':((req, res) => {
    db.query(`SELECT * FROM pictures WHERE id = ${req.params.id};`, (err, data) => {
      if (err) console.log('err in getting image ', req.params.id, err);
      res.status(200).send(data);
    })
  }),
  'updatePicByName':((req, res) => {
  }),
  'getName':((req, res) => {
    // Picture.findAll({ include:[{
    //   model: Image, where: {product_name: req.params.name
    //   }}]
    // })
    //   .then(data => {
    //     res.status(200).send(data)
    //   })
  }),
  'updatePicById':((req, res) => {
    db.query(`UPDATE pictures SET url = ${req.params.url} WHERE id = ${req.params.id};`, (err, data) => {
      if (err) console.log('err in updating image by id', req.params.id, err);
      res.status(200).send(data);
    })
  }),
  'updateNameByName': ((req, res) => {
    db.query(`UPDATE images SET name = ${req.params.name} WHERE id = ${req.params.id};`, (err, data) => {
      if (err) console.log('err in updating images by id', req.params.id, err);
      res.status(200).send(data);
    })
  }),
  'deleteNameByName': ((req, res) => {
  }),
  'updateNameById': ((req, res) => {

  }),
  'deleteNameById': ((req, res) => {
    db.query(`DELETE FROM images where id = ${req.params.id}`, (err, data) => {
      if (err) console.log('err in deleting images by id', req.params.id, err);
      res.end();
    })
  }),
}

module.exports = {pictureController}
