const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    surname:{type:String,required:true},
    password:{type:String,require:true},
    email:{type:String,unique: true,require:true},
    role:{type:String,ref:'role'},
});

const productsSchema=new mongoose.Schema({
    id:{type:String,unique:true,require:true},
    name:{type:String,require:true},
    quantity:{type:Number,require:true},
    price:{type:Number,require:true},
});

const ordersSchema=new mongoose.Schema({
    productId:{type:Number,unique:true,require:true},
    status:{type:Boolean,require:true},
});

const User=mongoose.model('User',userSchema);
const Products=mongoose.model('Products',productsSchema);
const Order=mongoose.model('Order',ordersSchema);

module.exports={User,Products,Order};