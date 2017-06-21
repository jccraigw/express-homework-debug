var express = require('express'),
   app     = express(),
    server  = require('http').createServer(app),
    path = require('path');

    var movie ={'title': 'he got game', 'year': 1999}
    var Lakers ={'city': 'LA', 'conference': 'west'}

//tell express that our views can be found in ./views
app.set('views', path.join(__dirname, 'views'));
//tell express that we are using handlebars as our view engin
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));


  app.get('/text', function(request, response){
    // request object is from the client,
    // the response is what were sending back
    response.send('Hey I the server finally works')
  })
  app.get('/home', function(req, res){

	res.render('home');
})
  app.get('/profile', function(req, res){

	res.render('profile');
})


 app.get('/movie', function(req, res){

	res.json(movie);
})

 app.get('/lakers', function(req, res){

	res.json(Lakers);
})



// first argument is the port number
server.listen(5000, function(){
  console.log('server is listening, but on what port, are you reading the code?')
})
