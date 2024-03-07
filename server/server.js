const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const Campground = require('./models/campground');
const ExpressError = require('./utils/ExpressError');
const catchAsync = require('./utils/catchAsync');

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
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(express.urlencoded({extended:true}));
// app.use(methodOverride('_method'));

// app.use(express.static(__dirname + '/assets'));
const root = path.resolve(__dirname, '../client', 'build');

app.use(express.static(root));
app.use(express.json());

/**
 *  Campgrounds Index Page
 */
app.get('/api/getCampgrounds', catchAsync(async (req, res)=>{
    const campgrounds = await Campground.find({});
    res.json({success:true, campgrounds})
    // res.render('campgrounds', {title: 'Campgrounds', campgrounds});
}))
/**
 *  Show Campground Detail Page
 */
app.get('/api/getCampground/:id', catchAsync(async (req, res, next)=>{
  const { id } = req.params;
  const campground = await Campground.findById(id);
  if(!campground){
    res.json({success:false, msg:'Campground not found'})
  }
  res.json({success:true, campground})
}))
/**
 *  Process Delete Campground
 */
app.delete('/api/deleteCampground/:id', catchAsync(async (req, res)=>{
  const { id } = req.params;
  try{
    const ref = await Campground.findByIdAndDelete(id);
    res.json({success:true})
  }catch(e){
    console.log('ERROR DELETE', e);
    res.json({success:false, msg:'Campground not found'})
  }
}))
/**
 *  Process New Campground
 */
app.post('/api/addCampground', catchAsync(async (req, res, next)=>{
    const {campground} = req.body;
    // if(!campground) throw new ExpressError('Invalid Campground Data', 500)
    const newCamp = new Campground(campground);
    const ref = await newCamp.save();
    res.json({success:true, id:ref._id})
}))


/**
 *  Process Updte Campgrounds
 */
app.put('/api/updateCampground/:id', catchAsync(async (req,res)=>{
    const {id} = req.params;
    const {campground} = req.body;
    const ref = await Campground.findByIdAndUpdate(id, campground, {new:true});
    res.json({success:true, id:ref._id})
}))

/**
 *  Home Page
 */
// app.get('/', (req,res) =>{
//     // throw new ExpressError('Taena this', 401);
//     res.render('home');

// })
/**
 *  404 Page Not Found
 */
app.all('*', (req, res, next) =>{
  // console.log('DIto umabot');
  res.sendFile('index.html', {root:root})
    // next(new ExpressError('Page Not Found', 404));
})

/**
 *  Error handling middelware
 */
app.use((err, req, res, next) =>{
    const {status = 500, message = 'Something Went Wrong'} = err;
    res.status(status).render('error', {status, message});
})

app.listen(process.env.PORT, ()=>{
    console.log(`Application loaded at port ${process.env.PORT}` );
})