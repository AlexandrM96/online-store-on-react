const express = require('express');
const app = express();
const authRoutes = require('./routres/auth');
const analyticsRoutes = require('./routres/analytics');
const categoryRoutes = require('./routres/category');
const orderRoutes = require('./routres/order');
const positionRoutes = require('./routres/position');
const itemRoutes = require('./routres/item');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');
const { mongoose } = require('mongoose');

mongoose.connect('mongodb://localhost/myStore')
.then(() => console.log('MongoDB connected.'))
.catch(error => console.log(error));

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/item', itemRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);

module.exports = app;