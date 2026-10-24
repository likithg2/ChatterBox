const express= require('express');
const methodOverride=require('method-override');
const mongoose=require('mongoose');
const app=express();
const path=require('path');
const Chat=require("./models/chat.js");
const ExpressError=require("./ExpressError");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,"public")));

main()
    .then(()=>{
        console.log("connection successfully");
    })
    .catch((err)=>{
        console.log(err);
    })

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// const chat1=new Chat({
//     from:"neha",
//     to:"priya",
//     message:"send me yr exam notes",
//     created_at:new Date()
// });

// chat1.save();

function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>{
            next;
        });
}}

const handleValidationError=(err)=>{
    console.log("Validation Error: Follow the rules properly");
    return err;
}

const handleCastError=(err)=>{
    console.log("Cast Error: look at it properly");
    return err;
}



app.get("/",(req,res)=>{
    res.send("working root");
})

//home route
app.get("/chats",asyncWrap(async (req,res)=>{
   
    let chats=await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
   
}));

//show route
app.get("/chats/:id",async(req,res,next)=>{
    try{
        let {id}=req.params;
        let chat=await Chat.findById(id);
        if(!chat){
            return new ExpressError(404,"Chats not found or deleted");
        }   
        res.render("show.ejs",{chat});
    }catch(err){
        next(err);
    }

});

//new route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

//create route
app.post("/chats",async(req,res,next)=>{
    try{
        let {from,message,to}=req.body;
        let date=new Date();
        let chat1=new Chat({from:from,message:message,to:to,created_at:date});
        await chat1.save()
        res.redirect("/chats");
    }catch(err){
        next(err);
    }
   
});

//edit route
app.get("/chats/:id/edit",asyncWrap(async (req,res)=>{
  
    let{id}=req.params;
    let chat=await Chat.findById(id);
    res.render("edit.ejs",{chat});
  
}));

//update route
app.put("/chats/:id",async (req,res,next)=>{
    try{
        let{message}=req.body;
    let{id}=req.params;
    let date=new Date();
    await Chat.findByIdAndUpdate(id,{message:message},{new:true,runValidators:true});
    await Chat.findByIdAndUpdate(id,{updated_at:date},{new:true,runValidators:true});
    res.redirect("/chats");
    }catch(err){
        next(err);
    }
    
});

//destroy route
app.delete("/chats/:id/delete",asyncWrap(async(req,res)=>{
    
    let {id}=req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
    
}));

//error handling middleware
app.use((err,req,res,next)=>{
    let{status=500,message="Some Error Occurred"}=err;
    res.status(status).send(message);
})

app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name==="ValidationError"){
        err=handleValidationError(err);
    }
    if(err.name==="CastError"){
        err=handleCastError(err);
    }
    next(err);

});

app.listen(8080,()=>{
    console.log("listening to port 8080");
})