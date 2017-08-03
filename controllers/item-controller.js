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
        Item.findByCategory(req.params.category).then(items=>{
            
            res.render('item/item-Categories',{
                title: req.params.category,
                data: items });
        });
    },
    subCategory: (req,res)=>{
        Item.findBySubCategory(req.params.subCategory).then(items=>{
            res.render('item/item-Subcategory',{
            title: req.params.subCategory,
            data: items
            });
        });
    },
    id: (req,res)=>{
        Item.findById(req.params.id).then(item=>{
            if(res.locals.comments == undefined){
                res.locals.comments = [{
                    title: "no comments found",
                    starRating: 0,
                    username: ""
                }];
            }
                        console.log(res.locals.comments);
            res.render('item/single-item',{
                data: item,
                comments: res.locals.comments
            });
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