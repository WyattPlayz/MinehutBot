require('./main.js').run();

const express = require('express');
const app = express()
const fs = require('fs');
const config = './config.json'
const got = require('got');
const cookie = require('cookie');



const { catchAsync } = require('./files/utils.js');

app.get('/webfs', function(req, res) {
});

app.get('/prelogin', function(req, res) {
  var url = require('url');
  var adr = req.url
  var q = url.parse(adr, true);
  
  var qdata = q.query
  sessionStorage.setItem("DiscordID", qdata.id);
  res.redirect('/login');
});

app.get('/login', function(req, res) {
  var url = require('url');
  var adr = req.url
  var q = url.parse(adr, true);
  
  var qdata = q.query
  
  if (qdata.error == 1) {
    res.writeHeader(200, 'application/html');
    res.write("<h1>Error!</h1>");
    res.write("<h3>Error Code 1</h3>");
    res.write("<h5>Discord Identifier Not Defined In Session Storage. Did you use a link from the bot?</h5>");
    res.end("<h6>Please try again!</h6>");
  } else {
  if (!localStorage.getItem("DiscordID")); res.redirect('/login?error=1')
  res.sendFile(__dirname + '/web/login.html');
  }
});

app.get('/mhl', catchAsync(async(req, res) => {
  var url = require('url');
  var adr = req.url
  var q = url.parse(adr, true);
  
  var qdata = q.query
  var em = qdata.T1
  var pw = qdata.T2
  var did = sessionStorage.getItem("DiscordID");
  var API = config.API
  
  const response = await got.post(`${API}/users/login`, {
    headers: {
      'content-type': 'application/json'
    },
    body: {
      email: em,
      password: pw,
    }})
  
  const session = JSON.parse(response.body);
  
  this.session = session;
  localStorage.setItem("session", session)
}));

app.get('/*', function(req, res) {
  res.redirect('https://discordapp.com/api/oauth2/authorize?client_id=500499702169600001&permissions=8&redirect_uri=https%3A%2F%2Fminehut.com%2Fpanel&scope=bot');
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});