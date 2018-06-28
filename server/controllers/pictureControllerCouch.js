const axios = require('axios');

const pictureController = {
  'getId':((req, res) => {
    console.log('aaa')
    axios(`http://127.0.0.1:5984/photos/_all_docs?include_docs=true`)
      .then(data => {
        console.log('data ', data)
        data.rows.forEach(item => {
          if (item[1] === req.param.id) {
            console.log('found id ', req.param.id);
            res.status(200).send({url: item['https://source.unsplash.com/320x240/?cats,https://loremflickr.com/320/240,http://lorempixel.com/320/240/cats']})
          }
        })
      })
      .catch(err => {
        console.error('failed to receive data by id');
        res.status(404).end();
      })
  }),
  'updatePicByName':((req, res) => {
    console.log('updating by name');
    Picture.update(
      { url: req.params.url },
      { where: { id: picture.id }}
    )
      .then(data => {
        res.status(200).send(data)
      })
  }),
  'getName':((req, res) => {
    Picture.findAll({ include:[{
      model: Image, where: {product_name: req.params.name
      }}]
    })
      .then(data => {
        res.status(200).send(data)
      })
  }),
  'updatePicById':((req, res) => {
    console.log('updating by name');
    Picture.update(
      req.query,
      { where: req.params }
    )
      .then(data => {
        res.status(204).send(data)
      })
  }),
  'updateNameByName': ((req, res) => {

  }),
  'deleteNameByName': ((req, res) => {
  }),
  'updateNameById': ((req, res) => {

  }),
  'deleteNameById': ((req, res) => {
    Image.destroy(
      { where: req.params }
    )
      .then(data => {
        console.log('delete')
        res.status(200).end()
    })
      .catch(err => {
        res.status(204).end('delete failed', err)
  })
  }),
}

module.exports = {pictureController:pictureController}
