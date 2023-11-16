const{Products}=require("../models/dbModels");

const getProducts={
    showProduct:async(req,res)=>{
        try {
            const prodData=await Products.find();
            res.json(prodData);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Failed to fetch products" });
        }
    }
}

module.exports=getProducts;