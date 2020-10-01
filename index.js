const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, './public');

app.use(express.static(publicDirectoryPath));
app.set('view engine', 'ejs');


// Main Page
app.get('/', (req, res) => {
    res.render('index');
});


app.listen(port, function() {
    console.log(`Server started on port ${port}`);
});