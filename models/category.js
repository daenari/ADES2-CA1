const { query } = require('../database');

module.exports.retrieveAllCategory = function retrieveAllCategory() {
    const sql = `SELECT id, name FROM categories`
    return query(sql).then(function (result) {
        var cat_arr = [];
        result[0].forEach(function (row) {
            cat_arr.push({ id: row.id, name: row.name });
        })
        //console.log(result[0]);
        return cat_arr;
    })
};

module.exports.createCategory = function createCategory(name) {
    const sql = `INSERT INTO categories (name) VALUES (?)`
    return query(sql, [name]).then(function (result) {
        return result;
    });
}

module.exports.deleteCategory = function deleteCategory(id) {
    const sql = `DELETE from categories WHERE id = ?`
    return query(sql, [id]).then(function (result) {
        return result;
    });
}

module.exports.updateCategory = function updateCategory(name, id) {
    const sql = `UPDATE categories SET name = ? where id = ?`
    return query(sql, [name, id]).then(function (result) {
        return result;

    })
}