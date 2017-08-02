\c art_store
CREATE TABLE IF NOT EXISTS items(
    item_id SERIAL PRIMARY KEY,
    picture_url TEXT,
    name TEXT,
    description TEXT,
    product_Category TEXT,
    sub_Category TEXT,
    price DECIMAL
);

-- ADD EMAIL FOR USER
CREATE TABLE IF NOT EXISTS users(
    user_id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    username TEXT,
    password TEXT,
    phoneNumber INTEGER
);  

CREATE TABLE IF NOT EXISTS comments(
    commment_id SERIAL PRIMARY KEY,
    title TEXT,
    star_rating INTEGER,
    us_id INTEGER REFERENCES users(user_id),
    it_id INTEGER REFERENCES items(item_id)    
);
 CREATE TABLE IF NOT EXISTS orders (
    order_id INTEGER REFERENCES users(user_id),
    item_id INTEGER REFERENCES items(item_id),
    quantity INTEGER        
 );