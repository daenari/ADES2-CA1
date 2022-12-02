const { query } = require('../database');

module.exports.create = function create(description, price) {
    const sql = `INSERT INTO expenses (description, price) VALUES (?, ?)`;
    return query(sql, [description, price]).then(function (result) {
        return result;
    });
};

module.exports.deleteByID = function deleteByID(id) {
    const sql = `DELETE FROM expenses WHERE id = ?`;
    return query(sql, [id]).then(function (result) {
        return result;
    });

};

module.exports.updateByID = function updateByID(description, price, id) {
    const sql = `UPDATE expenses SET description = ?, price = ? where id = ?`
    return query(sql, [description, price, id]).then(function (result) {
        return result;

    })
};


module.exports.retrieveAll = function retrieveAll() {
    const sql = `SELECT * from expenses`
    return query(sql).then(result => {
        //console.log('result:', result)
        return result;
    })
};