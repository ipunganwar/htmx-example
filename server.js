import express from "express";
import createHomePageTemplate from "./views/index.js";
import createListTemplate from "./views/list.js";
import BOOKS_DATA from "./data/data.js";
import createBookTemplate from "./views/book.js";

const app = express();

// set static folder
app.use(express.static("public"));
// parse url-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(createHomePageTemplate());
});

app.get("/books", (req, res) => {
  res.send(createListTemplate());
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;
  const id = Math.random().toString();

  BOOKS_DATA.push({ id, title, author });
  res.redirect(`/books/${id}`);
});

app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const book = BOOKS_DATA.find((b) => b.id === id);

  res.send(createBookTemplate(book));
});

app.listen(3000, () => {
  console.log("server listening from port 3000");
});
