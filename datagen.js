const faker = require('faker');
const fs = require('fs')



const imageGen = () => {
  const stream = fs.createWriteStream('../../databases/MariaDB 10.3/data/photos/image.csv');
  let i = 10000000;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      if (i === 0) {
        stream.write(`${faker.lorem.words()}\n`)
      } else {
        ok = stream.write(`${faker.lorem.words()}\n`)
      }
    } while (i > 0 && ok);
    if (i > 0) {
      stream.once('drain', write);
    }
  }
  write();
}

const picGen = () => {
  const stream = fs.createWriteStream('../../databases/MariaDB 10.3/data/photos/pic.csv');
  let i = 10000000;
  let n = 0
  const write = () => {
    let ok = true;
    do {
      n += 1;
      i -= 1;
      if (i === 0) {
        stream.write(`"https://source.unsplash.com/320x240/?cats,https://loremflickr.com/320/240,http://lorempixel.com/320/240/cats",${n}\n`)
      } else {
        ok = stream.write(`"https://source.unsplash.com/320x240/?cats,https://loremflickr.com/320/240,http://lorempixel.com/320/240/cats",${n}\n`)
      }
    } while (i > 0 && ok);
    if (i > 0) {
      stream.once('drain', write);
    }
  }
  write();
}


//imageGen()
//picGen()
