const db = require('../db/config');

const Item = {
    findAll : () =>{
        return db.query('SELECT * FROM items');
    }
}

module.exports = Item;