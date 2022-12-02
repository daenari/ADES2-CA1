<<<<<<< HEAD
require('dotenv').config();
const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`App listening on port ${port}`);
=======
require('dotenv').config();
const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`App listening on port ${port}`);
>>>>>>> a0af1598e0d8976d52b031720a5693ef0f928062
});