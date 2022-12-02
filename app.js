const express = require('express');
const expenseModel = require('./models/expense');

const app = express();
app.use(express.json()); // to process JSON in request body

app.use(express.static('public'));

app.post('/expenses', function (req, res, next) {
    const description = req.body.description;
    const price = req.body.price;

    return expenseModel //get query
        .create(description, price,) //query method
        .then(function () {
            return res.sendStatus(201);
        })
        .catch(function (error) {
            console.error(error);
            return res.status(500).json({ error: 'Unknown Error' });
        });
});


app.delete('/expenses/:id', function (req, res, next) {
    const id = req.params.id;

    return expenseModel //get query
        .deleteByID(id) //query method
        .then(function () {
            return res.sendStatus(201);
        })
        .catch(function (error) {
            console.log(error);
            return res.status(500).json({ error: 'Unknown Error!' });
        });
});

app.put('/expenses/:id', function (req, res, next) {
    const id = req.params.id;
    const description = req.body.description;
    const price = req.body.price;

    return expenseModel //get query
        .updateByID(description, price, id) //query method
        .then(function () {
            return res.sendStatus(201);
        })
        .catch(function (error) {
            console.log(error)
            return res.status(500).json({ error: 'Unknown Error!' });
        })
});

app.get('/expenses/all', function (req, res, next) {
    return expenseModel //get query 
        .retrieveAll() //query method
        .then((response) => {
            //console.log('response:', response)
            return response
        })
        .catch(function (error) {
            console.log(error)
        })
});

module.exports = app;