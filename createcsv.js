const fs = require('file-system');

const batch = [
  {
    productId: 100,
    name: 'Soul Flare',
    images: `https://i.imgur.com/9PqHFcL.jpg`,
    price: 499,
    description: 'Palo santo mixtape occaecat sartorial. Cloud bread YOLO swag',
    tag: 'throwing'
  },
  {
    productId: 95,
    name: 'Baneful Beads',
    images: `https://i.imgur.com/YZp8o.jpg`,
    price: 69,
    description: 'Cold-pressed gochujang microdosing ut pour-over',
    tag: 'flaunting'
  },
  {
    productId: 89,
    name: 'Doom guard',
    images: `http://i1.wp.com/viralcircus.com/wp-content/uploads/2014/03/4X0cWrc.jpg`,
    price: 302,
    description: 'Try-hard mollit single-origin coffee kale chips ennui affogato',
    tag: 'bragging'
  },
  {
    productId: 45,
    name: 'Lightbane',
    images: `https://i.imgur.com/3503NDg.png`,
    price: 56,
    description: 'Bespoke cred dolore vegan unicorn leggings',
    tag: 'bragging'
  },
  {
    productId: 33,
    name: 'Harmony',
    images: `https://i.imgur.com/ClK2HuP.jpg`,
    price: 730,
    description: 'Magna narwhal tacos, activated charcoal aliqua try-hard raw denim',
    tag: 'war'
  }
]

const seed = (count) => {
  const writePath = (__dirname, `./outputpg.csv`);
  const stream = fs.createWriteStream(writePath);
  stream.write('_id,productId,name,description,tag,price,images\n')
  for(let j = 0; j < 5; j++) {
    for (let i = 1; i <= count; i++) {
      const r = Math.floor(Math.random()*4);
      stream.write(`${(j*count)+i},${batch[r].productId},"${batch[r].name}","${batch[r].description}","${batch[r].tag}",${batch[r].price},"${batch[r].images}"\n`)
    }
  }
  console.log('csv write success')
}

seed(2000000);

//node --max-old-space-size=2048 /home/jonathan/Documents/Repos/jb-component/server/seed.js