var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
var knex = require('knex')({
  client: 'mysql',
    connection: {
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'LoginApp',
    }
})
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post('/',(req,res)=>{
  console.log('dfgbhnm')
  var data = ''
  req.on('data',chunk=>{
    data += chunk;
  })
  req.on('end',()=>{
    console.log(data)
    data = JSON.parse(data)
    knex('users')
    .where({
      Username: data.userName,
      Password: data.userPassword
    })
    .then((result)=>{
      if(result.length>0){
        res.send('1')
      }else{
        res.send('0')
      }
    })
  })
})

app.post('/Signup',(req,res)=>{
    var data = ''
  req.on('data',chunk=>{
    data += chunk;
  })
  req.on('end',()=>{
    data = JSON.parse(data)
    knex('users')
    .insert({
      Name: data.Name,
      Username: data.userName,
      Password: data.userPassword
    })
    .then(()=>{
      res.send('1')
    })
    .catch((err)=>{
      res.send('0')
    })
  })
})

app.listen(3000)