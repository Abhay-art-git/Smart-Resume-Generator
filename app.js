const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/generate', (req, res) => {
  const data = req.body;
  res.render('portfolio_template', { data });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
