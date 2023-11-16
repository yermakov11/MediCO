const{Order}=require("../models/dbModels")

const postProducts={
    postProducts: async(req,res)=>{
        const sendProductData=req.body;
        Order.create(sendProductData)
        .then(sendProduct=>{
            res.json(sendProduct)
        })
        .catch(err=>console.error(err));
    }
}

module.exports=postProducts;