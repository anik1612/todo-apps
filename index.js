const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/static", express.static("public"));

//view engine configuration
app.set("view engine", "ejs");

//GET method
app.get('/', (req, res) => {
    res.render("todo.ejs");
})

//POST method
app.post('/', (req, res) => {
    console.log(req.body);
})

app.listen(3000)