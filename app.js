const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.get('/', (req,res) =>{
    res.render('home');
})

app.get('*', (req, res) =>{
    res.render('404');
})

app.listen(process.env.PORT, ()=>{
    console.log(`Application loaded at port ${process.env.PORT}` );
})