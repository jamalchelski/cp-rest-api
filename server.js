const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// call rauters

var routers = require('./routers');
routers(app);

app.listen(3000, () => {
    console.log(`Server started on port`);
});