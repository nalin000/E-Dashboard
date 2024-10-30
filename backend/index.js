const express = require('express');
const cors = require('cors');
require('./db/config');
//const mongoose=require("mongoose");
const User = require('./db/User')
const Product=require('./db/Product');
const app = express();
app.use(express.json());  //convert to json format
app.use(cors());

//making the route to api and we cn say this is our api
app.post("/register", async (req, res) => {  // response wahi send hoga jo req me milega
    let user = new User(req.body)  //user nme ke schema me jo bhi req me data mile wo daal do and we know that user is schema
    let result = await user.save();
    result = result.toObject(); //makin our result a object so that we can esily do opertions
    delete result.password;
    res.send(result);
})
//this is login api
app.post("/login", async (req, resp) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");// user nme ke variable me ye User schema me find karo req.body ko
        if (user) {
            resp.send(user)
        }
        else {
            resp.send({ result: "No user found" })
        }  

    }
    else {
        resp.send({ result: "No user found" })
    }    

}) 

app.post("/add-product",async(req,res)=>{
let product=new Product(req.body);
let result=await product.save();
res.send(result)
});

//making route for add product
app.get("/products",async (req,res)=>{
    let products= await Product.find();
    if(products.length>0)
    {
    res.send(products);
    }
        else{
            res.send({result:"No Product Found"})
        }
})

app.delete("/product/:id", async (req,res)=>{
    const result=await Product.deleteOne({_id:req.params.id.trim()}) //pProduct is the name of our moodel and we are trying to delete a rpoduct listing using its id
    res.send(result);

})  

//2 api ke route same ho sakte hai par unke method alag alag hone chahiye
app.get("/product/:id",async (req,res)=>{
    let result= await Product.findOne({_id:req.params.id.trim()});
    if(result){
        res.send(result)
    }
    else{
        res.send("Not found");
    }
});

app.put("/product/:id", async (req,res)=>{
 let result=await Product.updateOne(
    {_id:req.params.id.trim()},
    {
        $set :req.body
    }
 )
});


app.get("/search/:key", async(req,res)=>{
    let result= await Product.find({
        "$or": [
            {name:{$regex:req.params.key.trim()}},
            {price:{$regex:req.params.key.trim()}},
            {category:{$regex:req.params.key.trim()}}
            //{company:{$regex:req.params.key.trim()}}

        ]
    });
    res.send(result);
})

app.listen(5000)

