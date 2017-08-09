const Item = require('../models/item');
const moment = require('moment');

const ItemController = {
    index: (req,res)=>{
        Item.findAll().then((data)=>{
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
            res.render('item/single-item',{
                data: item,
                comments: res.locals.comments
            });
        });
    },
    comments : (req,res)=>{
        Item.findComments(req.params.id).then(comments =>{
            res.json(comments);
        });
    },
    getCart: (req,res)=>{
        Item.getOrders(req.user.user_id).then(orders=>{
            res.render('item/cart',{
                items: orders
            });
        }).catch(err=>{
            console.log(err);
            res.status(500).json(err);
        });
    },
    findCart:(req, res)=>{
        Item.getOrders(req.user.user_id).then(orders=>{
            res.render('item/cart',{
                items: orders
            });
        }).catch(err=>{
            console.log(err);
            res.status(500).json(err);

        })
    },
    editOrder: (req,res)=>{
        Item.editOrder(req.params.id, req.body.qty).then(order=>{
            res.redirect('/search/cart/all');
        }).catch(err=>{
            console.log(err);
            res.status(500).json(err);
        })
    },
    deleteOrder: (req,res)=>{
        Item.deleteOrder(req.params.id).then(()=>{
            res.redirect('/search/cart/all');
        }).catch(err=>{
            console.log(err);
            res.status(500).json(err);
        })
    },
    checkout : (req,res)=>{
        res.render('item/checkout',{
            random : Math.floor(Math.random()*9999999),
            date  : moment().format('MMMM Do YYYY')
        })
    }

}

module.exports = ItemController;