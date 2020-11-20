const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const routes = require('./routes/routes');

app.use(express.json());
app.use(cors());
app.use('/gabsip', routes);

mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => console.log('Database connected')
);

app.listen(4000, () => {
  console.log('Server working');
});
