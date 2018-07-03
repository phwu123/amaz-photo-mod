const Router = require('express').Router();
const { pictureController } = require('../controllers/pictureController')

Router.route('/id/:id')
  .get(pictureController.getId)
  .post(pictureController.makeCat)
  .put(pictureController.updatePicById)
  .delete(pictureController.deleteNameById)

Router.route('/ids')


Router.route('/name/:name')
  .get(pictureController.getName)
  .post(pictureController.makeCat)
  .put(pictureController.updatePicByName)
  .delete(pictureController.deleteNameByName)




module.exports = {
  Router:Router
}