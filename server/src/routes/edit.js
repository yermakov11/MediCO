const express=require("express");
const router=express.Router();
const editProduct=require("../controllers/editProducts");

router.get("/",editProduct.getProductsId);
router.put("/",editProduct.editProduct);

module.exports=router;