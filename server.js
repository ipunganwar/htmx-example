import express from "express";
import createHomePageTemplate from "./views/index.js";
import createListTemplate from "./views/list.js";

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

app.listen(3000, () => {
  console.log("server listening from port 3000");
});
