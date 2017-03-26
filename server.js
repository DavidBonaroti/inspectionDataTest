require('dotenv').config();


const express = require('express'),
app = express(),
port = process.env.PORT || 8080,
expressLayouts = require('express-ejs-layouts'),
mongoose = require('mongoose');

//connect to database
mongoose.connect(process.env.DB_URI);


//static assets
app.use(express.static(__dirname + '/public'));


app.set('view engine', 'ejs');
app.use (expressLayouts);


app.use(require('./app/routes'));


app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
