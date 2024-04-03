const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
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

const root = path.resolve(__dirname, '../client', 'build');

app.use(express.static(root));
app.use(express.json());


// app.use(express.urlencoded({extended:true}));
// app.use(methodOverride('_method'));

// app.get('/campgrounds', async (req, res)=>{
//     const campgrounds = await Campground.find({});
//     res.render('campgrounds', {title: 'Campgrounds', campgrounds});
// })
// app.get('/campgrounds/new', (req,res)=>{
//     res.render('campgrounds/new');
// })
// app.post('/campgrounds', async (req, res)=>{
//     const {campground} = req.body;
//     const newCamp = new Campground(campground);
//     await newCamp.save();
//     res.redirect('/campgrounds');
// })
// app.delete('/campgrounds/:id', async (req, res)=>{
//     const { id } = req.params;
//     const ref = await Campground.findByIdAndDelete(id);
//     res.redirect('/campgrounds');
// })

// app.get('/campgrounds/:id', async (req, res)=>{
//     const {id} = req.params;
//     const campground = await Campground.findById(id);
//     res.render('campgrounds/show', {campground});
// })

app.put('/api/updateCampgroud/:id', async (req,res)=>{
    const {id} = req.params;
    const {campground} = req.body;
    res.json({success:true})  
    // await Campground.findByIdAndUpdate(id, campground, {new:true});
    // res.redirect(`/campgrounds/${id}`);
})


app.get('/api/getCampground/:id', async (req, res) =>{
  const { id } = req.params;
  const campground = await Campground.findById(id)
  res.json({success:true, campground})
})

app.get('/api/getCampgrounds', async (req, res) =>{
  const campgrounds = await Campground.find({})
  res.json({success:true, campgrounds})
})

// This will will load all urls to main React page
app.get('*', (req, res) =>{
  res.sendFile('index.html', {root:root})
  // res.render('404');
})

app.use((err, req, res, next) =>{
    const {status = 500, message = 'Something Went Wrong'} = err;
    res.status(status).send(message);
})

app.listen(process.env.PORT, ()=>{
    console.log(`Application loaded at port ${process.env.PORT}` );
})