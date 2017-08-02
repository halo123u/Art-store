const Item = require('../models/item');

const ItemController = {
    index: (req,res)=>{
        Item.findAll().then((data)=>{
            console.log(data);
            res.status(200).json(data);
        }).catch(err=>{
            console.log(err);
            res.status(500).json(err);
        })
    },
    category: (req,res)=>{
        Item.findByCategory(req.params.category).then(data=>{
            console.log(data);
            res.status(200).json(data);
        });
    },
    subCategory: (req,res)=>{
        Item.findBySubCategory(req.params.subCategory).then(data=>{
            console.log(data);
            res.status(200).json(data);
        });
    },
    id: (req,res)=>{
        Item.findById(req.params.id).then(item=>{
            console.log(item);
            console.log(res.locals.comments);
            res.status(200).json(item);
        });
    },
    comments : (req,res)=>{
        Item.findComments(req.params.id).then(comments =>{
            console.log(comments);
            res.json(comments);
        })
    }
}

module.exports = ItemController;