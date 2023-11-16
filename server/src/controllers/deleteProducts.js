const{Products}=require("../models/dbModels");

const deleteProduct={
    removeProduct:async(req,res)=>{
        try {
            const delProd=await Products.findByIdAndDelete(req.params.id);
            res.json(delProd);
        } catch (err) {
            console.error(err);
        }
    }
}
module.exports=deleteProduct;