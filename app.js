const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');


// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
  const bolgs = [
    {title: 'yoshi finds eggs', snippet: 'lorem ipsum'},
    {title: 'Mario fiunds stars', snippet: 'lorem ipsum'},
    {title: 'How to defeat Bowser', snippet: 'lorem ipsum'},
  ];

  res.render('index', { title: 'Home', blogs: blogs  });
});

app.get('/about', (req, res) => {

  // res.send('<p>about page</p>');
  res.render('about', { title: 'About' });
});



app.get('/blogs/create', (req,res) => {
  res.render('create', { title: 'Create a new blog' });
})


// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

