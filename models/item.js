const db = require('../db/config');

const Item = {
    findAll : () =>{
        return db.query('SELECT * FROM items');
    },
    findById : (id) =>{
        return db.one(`SELECT * FROM items where item_id = $1 `,[id]);
    },
    findByCategory : (category)=>{
        return db.query(`SELECT * FROM items
        WHERE product_Category = $1`,[category]);        
    },
    findBySubCategory: (subCategory)=>{
         return db.query(`
         SELECT * FROM items
         WHERE sub_Category = $1
         `,[subCategory]);
    },
    findComments : (id)=>{
        return db.query(`select comments.title,comments.star_rating,users.username from comments JOIN users ON comments.us_id = users.user_id WHERE us_id =$1;`,[id]);
    }
}

module.exports = Item;