const express = require('express');
const path = require('path');
const logger  =require('morgan');
const app = express();

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});
app.use(logger('dev'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
    res.render('index',{page: "home"});
});
const searchRoutes = require('./routes/search-routes')
app.use('/search',searchRoutes)


module.exports = app;