
const express = require('express');
const bodyparser = require('body-parser');
const env = require('dotenv');

env.config();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const app = express();

// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGO_URL);
// // connect to mongodb
// mongoose.connection.once('connected', (err) => {
//   if (err) {
//     console.log('error cant connect to mongodb');
//     return;
//   }
//   console.log('Connected to mongodb database');
// });


// Uses+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// app.use(jwtExpress({ secret: process.env.JWT_SECRET_KEY }).unless({ path: [/^\/.*/] }));

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });
// app.use(urlencoded({ extended: false }));
// app.use(json());

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// require('./routes')(app);
// config routes
// app.get('/', (req,res) => {
//   res.send('hello');
// });

// Create-server++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const port = process.env.PORT;
app.listen(port, () => {
  console.log('Connected & Listem to port', port);
});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

