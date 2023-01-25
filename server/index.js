const express = require('express')
const Sequelize = require('sequelize');
const app = express()
const { Login } = require('./models/model.js');
const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}));


const port = 8080

app.get('/save/:name/:phone/:password', function (req, res) {
  console.log(' name: ' + req.params.name + ' password: ' + req.params.password + ' phone: ' + req.params.phone);
  Login.create({
    name: req.params.name,
    phone: req.params.phone,
    password: req.params.password
  })
  .then((login) => {
    console.log(login.get({ plain: true }));
    res.json({ status: 'success' });
  })
  .catch((err) => {
    console.log(err);
    console.log({ status: 'error' });
    res.json({ status: 'error' });
  })
});

app.get('/login/:phone/:password', function (req, res) {  
  Login.findOne({
    where: {
      phone: req.params.phone
    }
  }).then((users) => {
    if (users.dataValues != null ){
      if(users.dataValues.password == req.params.password){
        res.json({ status: 'success', message: 'Welcome' });
      }
      else {
        res.status(401).json({ status: 'wrong', message: 'Invalid phone number or password' });
      }
    }
    else{
      console.log("User does not exist");
    }
  })
  .catch((er) => {
    console.log("error");
    res.json({ status: 'User does not exist' });
  })
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})