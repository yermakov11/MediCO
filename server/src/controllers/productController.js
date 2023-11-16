const{Products}=require("../models/dbModels")

const productController={
    addProduct:async(req,res)=>{
        const productData=req.body;
        Products.create(productData)
        .then(product=>{
            res.json(product)
        })
        .catch(err=>console.error(err))
    }
}

module.exports=productController;