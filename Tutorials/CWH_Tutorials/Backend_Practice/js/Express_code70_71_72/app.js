console.log("Code 70: Installing Express | Express App added");

/* veido 71 */ 
const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// For serving static files
app.use('/static', express.static('static'))

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))
 
// Our pug demo endpoint
app.get("/demo", (req, res)=>{ 
    res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there and thanks for telling me how to use pubG!' })
});

// Our pug demo endpoint 

app.get('/demo', function (req, res) {
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there!' })
  })

app.get("/",(req, res) => {
    res.send("This is home page of my first express app with Hamza");
})

app.get("/about",(req, res) => {
    res.send("This is about page of my first express app with Hamza");
})

app.post("/about",(req, res) => {
    res.send("This is about page with POST of my first express app with Hamza");
})


app.listen(port, () => {
    console.log(`this application started succesgully on port ${port}`)
})