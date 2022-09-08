const express = require('express');
const app = express();
app.use(express.static(__dirname));

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.sendFile(__dirname +"/index.html");
    });
app.get('/about', (req, res) => {
    res.sendFile(__dirname +"/about.html");
    });
app.get('/contact', (req, res) => {
    res.sendFile(__dirname +"/contact-me.html");
    });

app.get('*', (req, res) => {
        res.status(404).sendFile(__dirname +"/404.html");
    });
  
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });