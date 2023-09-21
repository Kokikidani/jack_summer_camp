const express = require("express");
const app = express();

// EJSビューエンジンを設定
app.set("view engine", "ejs"); // EJSをビューエンジンとして使用

// CSSや画像ファイルを置くフォルダを指定するコードを貼り付けてください
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/select_feeling", (req, res) => {
  res.render("select_feeling.ejs");
});

app.get("/feeling/sad", (req, res) => {
  // anxiety.ejsを表示するルート
  res.render("feeling/sad");
});

app.get("/feeling/lonely", (req, res) => {
  // anxiety.ejsを表示するルート
  res.render("feeling/lonely");
});

app.get("/feeling/exicitement", (req, res) => {
  // anxiety.ejsを表示するルート
  res.render("feeling/exicitement");
});

app.get("/feeling/irritation", (req, res) => {
  // anxiety.ejsを表示するルート
  res.render("feeling/irritation");
});

app.get("/feeling/impatience", (req, res) => {
  // anxiety.ejsを表示するルート
  res.render("feeling/impatience");
});

app.get("/feeling/nervous", (req, res) => {
  // anxiety.ejsを表示するルート
  res.render("feeling/nervous");
});

app.get("/feeling/anxiety", (req, res) => {
  // anxiety.ejsを表示するルート
  res.render("feeling/anxiety");
});

app.listen(3000);
