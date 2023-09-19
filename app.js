const express = require('express');
const app = express();

// CSSや画像ファイルを置くフォルダを指定するコードを貼り付けてください
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index.ejs');
});



app.listen(3000);
