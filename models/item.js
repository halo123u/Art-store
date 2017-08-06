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
    },
    addToOrders  : (order)=>{
        return db.query(`
        INSERT INTO orders(user_id, item_id, quantity)
        VALUES
        ($1,$2,$3)
        `,[order.userId,order.itemId,order.qty]);
    },
    getOrders  :(userId)=>{
        return db.query(`
        SELECT items.name, items.picture_url, order_id, quantity 
        FROM orders 
        JOIN items ON orders.item_id = items.item_id 
        WHERE user_id =$1`,[userId]);
    },
    editOrder  :(id,qty)=>{
        return db.query(`UPDATE orders SET quantity=$1
        WHERE order_id = $2 `,[qty,id]);
    },
    deleteOrder : (id)=>{
        return db.query(`DELETE from orders WHERE order_id =$1`,[id]);
    }
}

module.exports = Item;