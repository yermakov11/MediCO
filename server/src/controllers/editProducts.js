const{Products}=require("../models/dbModels");

const editProduct={
    getProductsId:async(req,res)=>{
        try {
            const getProdId=await Products.findById(req.params.id);
            res.json(getProdId);
        } catch (err) {
            console.error(err);
        }
    },
    editProduct:async(req,res)=>{
        console.log(req.params,req.body)
        try {
            const updateProd=await Products.findByIdAndUpdate(req.params.id,req.body,{new:true});
            res.json(updateProd);
        } catch (err) {
            console.error(err);
        }
    }
}
module.exports=editProduct;