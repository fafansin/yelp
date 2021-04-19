const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const Campground = require('./models/campground');

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
app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.get('/campgrounds', async (req, res)=>{
    const campgrounds = await Campground.find({});
    res.render('campgrounds', {title: 'Campgrounds', campgrounds});
})
app.get('/campgrounds/new', (req,res)=>{
    res.render('campgrounds/new');
})
app.post('/campgrounds', async (req, res)=>{
    console.log("nasa post");
    const {campground} = req.body;
    const newCamp = new Campground(campground);
    await newCamp.save();
    res.redirect('/campgrounds');
})
app.delete('/campgrounds/:id', async (req, res)=>{
    const { id } = req.params;
    const ref = await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
})

app.get('/campgrounds/:id', async (req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findById(id);
    res.render('campgrounds/show', {campground});
})

app.put('/campgrounds/:id', async (req,res)=>{
    const {id} = req.params;
    const {campground} = req.body;
    await Campground.findByIdAndUpdate(id, campground, {new:true});
    res.redirect(`/campgrounds/${id}`);
})

app.get('/campgrounds/:id/edit', async (req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findById(id);
    res.render('campgrounds/edit', {campground});
})

app.get('/', (req,res) =>{
    res.render('home');
})

app.get('*', (req, res) =>{
    res.render('404');
})

app.listen(process.env.PORT, ()=>{
    console.log(`Application loaded at port ${process.env.PORT}` );
})