const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const Campground = require('./models/campground');
const AppError = require('./AppError');

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

app.use(express.static(__dirname + '/assets'));

/**
 *  Campgrounds Index Page
 */
app.get('/campgrounds', async (req, res)=>{
    const campgrounds = await Campground.find({});
    res.render('campgrounds', {title: 'Campgrounds', campgrounds});
})
/**
 *  New Campgrounds Page
 */
app.get('/campgrounds/new', (req,res)=>{
    res.render('campgrounds/new');
})
/**
 *  Process New Campground
 */
app.post('/campgrounds', async (req, res)=>{
    const {campground} = req.body;
    const newCamp = new Campground(campground);
    await newCamp.save();
    res.redirect('/campgrounds');
})
/**
 *  Process Delete Campground
 */
app.delete('/campgrounds/:id', async (req, res)=>{
    const { id } = req.params;
    const ref = await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
})
/**
 *  Show Campground Detail Page
 */
app.get('/campgrounds/:id', async (req, res, next)=>{
    const { id } = req.params;
    const campground = await Campground.findById(id);
    if(!campground){
        return next(new AppError('Campground not found', 401));
    }
    res.render('campgrounds/show', {campground});
})
/**
 *  Process Updte Campgrounds
 */
app.put('/campgrounds/:id', async (req,res)=>{
    const {id} = req.params;
    const {campground} = req.body;
    await Campground.findByIdAndUpdate(id, campground, {new:true});
    res.redirect(`/campgrounds/${id}`);
})
/**
 *  Edit Campgrounds Form Page
 */
app.get('/campgrounds/:id/edit', async (req, res, next)=>{
    const {id} = req.params;
    const campground = await Campground.findById(id);
    if(!campground){
        return next(new AppError('Campground not found', 401));
    }
    res.render('campgrounds/edit', {campground});
})
/**
 *  Home Page
 */
app.get('/', (req,res) =>{
    // throw new AppError('Taena this', 401);
    res.render('home');

})

app.get('*', (req, res) =>{
    res.render('404');
})

app.use((err, req, res, next) =>{
    const {status = 500, message = 'Something Went Wrong'} = err;
    res.status(status).send(message);
})

app.listen(process.env.PORT, ()=>{
    console.log(`Application loaded at port ${process.env.PORT}` );
})