const Item = require('../../models/item');

const addToCart = (req,res, next)=>{

    Item.addToOrders({
            userId:req.user.user_id,
            itemId:req.params.id,
            qty:req.body.qty
        }).then(order=>{
            next();
        }).catch(err=>{
            console.log(err);
            res.status(500).json(err);
            next();
        });
}

module.exports= {addToCart};