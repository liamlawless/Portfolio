const express = require('express');
const app = express();
// Create a server the browser can connect to
app.listen(process.env.PORT || 3000, function () {
    console.log('listening on port 3000');
})
// Allows us to render the quotes in the HTML dynamically
app.set('view engine', 'ejs');

// Make sure you place body-parser before your CRUD handlers!
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

// So our server can accept JSON data
app.use(bodyParser.json());

// Tell Express to use main file
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});