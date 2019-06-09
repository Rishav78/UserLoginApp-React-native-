var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.post('/',(req,res)=>{
  var data = ''
  req.on('data',chunk=>{
    data += chunk;
  })
  req.on('end',()=>{
    console.log(data)
    data = JSON.parse(data)
    if(data.userName == 'Rishav' && data.userPassword == 'Hacker_12'){
      res.send('1')
    }else{
      res.send('0');
    }
  })
})


app.listen(3000)