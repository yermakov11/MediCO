const express=require("express");
const router=express.Router()
const sendProduct=require("../controllers/postProducts")

router.post('/',sendProduct.postProducts);
module.exports=router;
