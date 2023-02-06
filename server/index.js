require('dotenv').config();

const express = require('express');
const app = express()
const PORT = process.env.PORT || 8001;

const morgan = require('morgan');
app.use(morgan('dev'));

const usersRouter = require('./routes/users')
const propertiesRouter = require('./routes/properties')
const pricesRouter = require('./routes/prices') 

app.use('/users', usersRouter);
app.use('/properties', propertiesRouter);
app.use('/prices', pricesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
