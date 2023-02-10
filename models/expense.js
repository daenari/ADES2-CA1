const { query } = require('../database');

module.exports.create = function create(description, amount, category_id, happened_at) {
    const sql = `INSERT INTO expenses (description, amount, category_id, happened_at) VALUES (?, ?, ?, ?)`;
    return query(sql, [description, amount, category_id, happened_at]).then(function (result) {
        return result;
    });
};

module.exports.deleteByID = function deleteByID(id) {
    const sql = `DELETE FROM expenses WHERE id = ?`;
    return query(sql, [id]).then(function (result) {
        return result;
    });

};

module.exports.updateByID = function updateByID(description, amount, category_id, happened_at, updated_at, id) {
    const sql = `UPDATE expenses SET description = ?, amount = ?, category_id = ?, happened_at = ?, updated_at = ? WHERE id = ?`
    return query(sql, [description, amount, category_id, happened_at, updated_at, id]).then(function (result) {
        return result;

    })
};


module.exports.retrieveAll = function retrieveAll() {
    const sql = `SELECT id, description, amount, category_id, happened_at, created_at, updated_at from expenses`
    //const sql = `SELECT e.id, e.description, e.amount, e.happened_at, e.created_at, e.updated_at, c.name as category_id from expenses e JOIN categories c on c.id = e.category_id`
    return query(sql).then(result => {
        var exp_arr = [];
        result[0].forEach(function (row) {
            exp_arr.push({ id: row.id, description: row.description, amount: row.amount, category_id: row.category_id, happened_at: row.happened_at, created_at: row.created_at, updated_at: row.updated_at });
        })
        return exp_arr;
    })
};


