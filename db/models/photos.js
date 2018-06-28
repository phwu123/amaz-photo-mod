const nano = require('nano')('http://root:root@localhost:5984');
const { docs } = require('./fake.js');
const photos = nano.db.use('photos');

nano.db.destroy('photos', (err, body) => {
  if (err) console.error('err in destroy', err);
  nano.db.create('photos', (err, body) => {
    if (err) console.error('err in db create ', err);
    console.log('photos created');
    // photos.bulk(docs, (err, body) => {
    //   if (err) console.error('err inserting data ', err);
    //   photos.insert(docs, (err, body) => {
    //     if (err) console.error('err in insert ', err);
    //     console.log('data inserted into photos ', body)
    //   })
    // })
  })
})

module.exports = {
  nano
}