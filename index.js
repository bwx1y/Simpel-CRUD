const express = require("express");
const path = require("path");
const routeUser = require("./routes/index");

const app = express();
const port = 3000;

app.use(express.json());

app.set("view engine", "ejs");
app.set("View", "views");

app.use("/src", express.static(path.join(__dirname, "node_modules/bootstrap/dist")));

app.use(routeUser);

app.listen(port, () => console.log(`your app listen on port ${port}`));
