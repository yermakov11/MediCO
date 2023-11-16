const express=require("express");
const router=express.Router();
const deleteProducts=require('../controllers/deleteProducts');

router.delete("/:id",deleteProducts.removeProduct);
module.exports=router;