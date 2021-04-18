const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers');

dotenv.config();

mongoose.connect(process.env.DB_HOST, {
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(()=>{
        console.log('Mongodb Connection Success');
    })
    .catch(e=>{
        console.log('Mongodb Connection Failed');
        console.log(e);
    })

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async()=>{
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++){
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = await new Campground({
            location:`${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`
        })
        await camp.save();
    } 
}

seedDB().then(()=>{
    mongoose.connection.close();
});