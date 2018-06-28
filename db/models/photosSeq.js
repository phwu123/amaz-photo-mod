const { db } = require('../config');
const Sequelize = require('sequelize');
const { imageData } = require('./fake.js');
const { pictureData } = require('./fake.js');
const { fakeStuff } = require('./fake.js')
//require('./fake.js');

const Image = db.define('image', {
  product_name: {
    type: Sequelize.STRING,
    allowNull: false
  }
},
  {
    timestamps: false
  })
const Picture = db.define('picture', {
  url: {
    type: Sequelize.TEXT,
    allowNull: false
  },
},
  {
    timestamps: false
  })

Picture.belongsTo(Image);

db.sync({ force: false })
  .then(() => {
    console.log('tables created successfully');
    // db.queryInterface.bulkInsert('images', imageData)
    //   .then(() => console.log('images seeded'))
    //   .catch((err) => console.log('err in images seeding ', err))
    // db.queryInterface.bulkInsert('pictures', pictureData)
    //   .then(() => console.log('pictures seeded'))
    //   .catch(err => console.log('err in pictures seeding ', err))
  })
  .catch((err) => console.log('error creating tables', err))

module.exports = {

}