const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 2000; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '6596b851dcd02750f33ba69f',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price,
            geometry :{
                type :"Point",
                coordinates :[
                     cities[random1000].longitude,
                     cities[random1000].latitude
                    ]
            },
            images:[
                {
                  url: 'https://res.cloudinary.com/dtt9x3xiz/image/upload/v1704381109/YelpCamp/vzit33zxguqrjw33p1mp.webp',
                  filename: 'YelpCamp/mmtsgejlfugd8chfhc7l',
                },
                {
                  url: 'https://res.cloudinary.com/dtt9x3xiz/image/upload/v1704381109/YelpCamp/vzit33zxguqrjw33p1mp.webp',
                  filename: 'YelpCamp/lytnbkwdavulzazqtojo',
                },
                {
                  url: 'https://res.cloudinary.com/dtt9x3xiz/image/upload/v1704381109/YelpCamp/vzit33zxguqrjw33p1mp.webp',
                  filename: 'YelpCamp/lgy7yradvp35g6zrqhlz',
                },
                {
                  url: 'https://res.cloudinary.com/dtt9x3xiz/image/upload/v1704381109/YelpCamp/vzit33zxguqrjw33p1mp.webp',
                  filename: 'YelpCamp/ijqiot2nevgtfuqegih5',
                }
              ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})