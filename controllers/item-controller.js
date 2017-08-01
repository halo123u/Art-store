const Item = require('../models/item');

const ItemController = {
    index: (req,res)=>{
        Item.findAll().then((res)=>{
            res.status(200).json(res);
        }).catch(err=>{
            console.log(err);
            res.status(500).json(err);
        })
    }
}

module.exports = ItemController;