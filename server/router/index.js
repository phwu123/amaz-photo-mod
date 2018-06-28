const Router = require('express').Router();
const { pictureController } = require('../controllers/pictureController')

Router.route('/pictures/name/:name')
  .get(pictureController.getName)
  .put(pictureController.updatePicByName)

Router.route('/pictures/:id')
  .get(pictureController.getId)
  .put(pictureController.updatePicById)

Router.route('/images/name/:name')
  .put(pictureController.updateByName)
  .delete(pictureController.deleteNameByName)

Router.route('/images/id/:id')
  .put(pictureController.updateNameById)
  .delete(pictureController.deleteNameById)




module.exports = {
  Router:Router
}