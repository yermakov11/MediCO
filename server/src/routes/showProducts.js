const express=require("express");
const router=express.Router();
const getProducts=require("../controllers/getProducts");

router.get('/',getProducts.showProduct);
module.exports=router;
