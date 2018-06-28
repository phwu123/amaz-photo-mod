const faker = require('faker');
const fs = require('fs')

const imageGen = (n=0) => {
  let images = fs.createWriteStream('./writed.csv');
  while (n < 10) {
    images.write(`${n},${faker.lorem.words()}\n`)
    n++
  }
  images.on('end', () => {
    console.log(`write of ${n} items finished`);
    images.end();
  })
}

const picGen = () => {

}


const imageData = [ 
{ product_name: 'primary Czech Koruna Intranet' },
{ product_name: 'Global Technician Avon' },
{ product_name: 'olive' },
{ product_name: 'Metal CSS Tactics' },
{ product_name: 'Architect' },
{ product_name: 'back up' },
{ product_name: 'Direct' },
{ product_name: 'Consultant' },
{ product_name: 'Networked' },
{ product_name: 'middleware Steel User-centric' },
{ product_name: 'Afghanistan JSON bus' },
{ product_name: 'Computers Small Plastic Towels' },
{ product_name: 'Personal Loan Account' },
{ product_name: 'Indiana' },
{ product_name: 'microchip Personal Loan Account' },
{ product_name: 'Awesome' },
{ product_name: 'parse XML payment' },
{ product_name: 'lime Steel Table' },
{ product_name: 'Auto Loan Account' },
{ product_name: 'paradigms Adaptives' } ]

const pictureData = [ 
{ id: 1, url: 'Mauritius withdrawal', imageId: 1 },
{ id: 2, url: 'optimal', imageId: 2 },
{ id: 3, url: 'Home system Turkish Lira', imageId: 3 },
{ id: 4, url: 'backing up Mouse reboot', imageId: 4 },
{ id: 5, url: 'Solomon Islands Dollar AGP', imageId: 5 },
{ id: 6, url: 'cultivate Checking Account matrix', imageId: 6 },
{ id: 7, url: 'dedicated', imageId: 7 },
{ id: 8, url: 'Sleek Usability', imageId: 8 },
{ id: 9, url: 'invoice withdrawal Product', imageId: 9 },
{ id: 10, url: 'Clothing New Mexico', imageId: 10 },
{ id: 11, url: 'Rubber connect Beauty', imageId: 11 },
{ id: 12, url: 'Facilitator disintermediate', imageId: 12 },
{ id: 13, url: 'Practical', imageId: 13 },
{ id: 14,
  url: 'installation encompassing indexing',
  imageId: 14 },
{ id: 15, url: 'Pula Vision-oriented Baby', imageId: 15 },
{ id: 16, url: 'withdrawal GB', imageId: 16 },
{ id: 17, url: 'Universal GB Forges', imageId: 17 },
{ id: 18, url: 'Chile Open-architected', imageId: 18 },
{ id: 19, url: 'Grocery Manager Stand-alone', imageId: 19 },
{ id: 20, url: 'Electronics', imageId: 20 } ]

const fakeStuff = (n = 1, images = [], pictures = []) => {
  //  const fake = 'faker.random.words()'

  const image = {};
  const picture = {};

  image.id = n
  image.product_name = faker.random.words()
  picture.id = n;
  picture.url = faker.random.words();
  picture.imageId = n
  if (n < 21) {
    images.push(image)
    pictures.push(picture)
    n++
    fakeStuff(n, images, pictures)
  } else {
    const both = []
    both.push(images, pictures);
  //  console.log(both);
  console.log(images)
  return images
  }
}


const docs = {
  "docs":[{
    "id":1,"product_name":"primary Czech Koruna Intranet","url":"Mauritius withdrawal"},{"id":2,"product_name":"Global Technician Avon","url":"optimal"},{"id":3,"product_name":"olive","url":"Home system Turkish Lira"},{"id":4,"product_name":"Metal CSS Tactics","url":"backing up Mouse reboot"},{"id":5,"product_name":"Architect","url":"Solomon Islands Dollar AGP"},{"id":6,"product_name":"back up","url":"cultivate Checking Account matrix"},{"id":7,"product_name":"Direct","url":"dedicated"},{"id":8,"product_name":"Consultant","url":"Sleek Usability"},{"id":9,"product_name":"Networked","url":"invoice withdrawal Product"},{"id":10,"product_name":"middleware Steel User-centric","url":"Clothing New Mexico"},{"id":11,"product_name":"Afghanistan JSON bus","url":"Rubber connect Beauty"},{"id":12,"product_name":"Computers Small Plastic Towels","url":"Facilitator disintermediate"},{"id":13,"product_name":"Personal Loan Account","url":"Practical"},{"id":14,"product_name":"Indiana","url":"installation encompassing indexing"},{"id":15,"product_name":"microchip Personal Loan Account","url":"Pula Vision-oriented Baby"},{"id":16,"product_name":"Awesome","url":"withdrawal GB"},{"id":17,"product_name":"parse XML payment","url":"Universal GB Forges"},{"id":18,"product_name":"lime Steel Table","url":"Chile Open-architected"},{"id":19,"product_name":"Auto Loan Account","url":"Grocery Manager Stand-alone"},{"id":20,"product_name":"paradigms Adaptives","url":"Electronics"
  }]}


// const couchDocsGen = (image, pic) => {
//   const docs = {
//     docs: []
//   }
//   for (let i = 0; i < image.length; i++) {
//     const data = {}
//     !image[i] ?
//       '' :
//       data.id = pic[i].id;
//       data.product_name = image[i].product_name;
//       data.url = pic[i].url;
//       docs.docs.push(data);
//   }
//   return JSON.stringify(docs);
// }

// couchDocsGen(imageData, pictureData)





module.exports = {
  imageData,
  pictureData,
  fakeStuff,
  docs,
  imageGen
}