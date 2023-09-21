const express = require('express');
const app = express();

// CSSや画像ファイルを置くフォルダを指定するコードを貼り付けてください
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

<<<<<<< HEAD
app.get('/play', (req, res) => {
  res.render('play.ejs');
=======
app.get('/select_feeling', (req, res) => {
    res.render('select_feeling.ejs');
>>>>>>> d2621d408afe346e7018abbcca8178c9c137cc92
});

app.get('/play', (req, res) => {
  res.render('play.ejs');
});

app.get('/title', (req, res) => {
  res.render('title.ejs');
});

app.listen(3000);
