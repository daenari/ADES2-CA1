const express = require('express');
const expenseModel = require('./models/expense');
const categoryModel = require('./models/category');

const app = express();
app.use(express.json()); // to process JSON in request body

app.use(express.static('public'));

app.post('/expenses', function (req, res, next) {
    const description = req.body.description;
    const amount = req.body.amount;
    const category_id = req.body.category_id;
    const happened_at = req.body.happened_at;
    //date = JSON.stringify(happened_at);

    return expenseModel //get query
        .create(description, amount, category_id, happened_at) //query method
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
    const amount = req.body.amount;
    const category_id = req.body.category_id;
    const happened_at = req.body.happened_at;
    const updated_at = req.body.updated_at;

    return expenseModel //get query
        .updateByID(description, amount, category_id, happened_at, updated_at, id) //query method
        .then(function () {
            return res.sendStatus(201);
        })
        .catch(function (error) {
            console.log(error)
            return res.status(500).json({ error: 'Unknown Error!' });
        })
});

app.get('/expenses/all', function (req, res, next) {
    expenseModel.retrieveAll() //query method
        .then((response) => {
            console.log('expense response:', response)
            res.send(response)
        })
        .catch(function (error) {
            console.log(error)
        })
});

app.get('/categories', function (req, res, next) {
    categoryModel.retrieveAllCategory()
        .then((response) => {
            console.log('category response:', response)
            res.send(response);
        })
        .catch(function (error) {
            console.log(error)
        })
});

app.post('/categories/create', function (req, res, next) {
    const name = req.body.name;

    return categoryModel
        .createCategory(name) //query method
        .then(function () {
            return res.sendStatus(201);
        })
        .catch(function (error) {
            console.error(error);
            return res.status(500).json({ error: 'Unknown Error' });
        });
})

app.delete('/categories/:id', function (req, res, next) {
    const id = req.params.id;

    return categoryModel //get query
        .deleteCategory(id) //query method
        .then(function () {
            return res.sendStatus(201);
        })
        .catch(function (error) {
            console.log(error);
            return res.status(500).json({ error: 'Unknown Error!' });
        });
})

app.put('/categories/:id', function (req, res, next) {
    const id = req.params.id;
    const name = req.body.name;

    return categoryModel
        .updateCategory(name, id)
        .then(function () {
            return res.sendStatus(201);
        })
        .catch(function (error) {
            console.log(error)
            return res.status(500).json({ error: 'Unknown Error!' });
        })
})


app.get('/categories/count', function (req, res, next) {
    categoryModel.showCount()
        .then((response) => {
            console.log('category count:', response)
            res.send(response);
        })
        .catch(function (error) {
            console.log(error)
        })
});

module.exports = app;