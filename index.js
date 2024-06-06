const express = require('express');
const path = require("path");
app.set("view engine", "ejs");
app.set("view", __dirname +"/views");
app.use(express.static(__dirname + "/public"))

app.get()

const app = express();
const port = 8080;


app.listen(port, () => {
    console.log(`Le serveur est lancé ${port}`);
    console.log(`l'application est disponible sur http://localhost:${port}`);
});

