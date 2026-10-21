const express= require('express');
const methodOverride=require('method-override');
const mongoose=require('mongoose');
const app=express();
const path=require('path');
const Chat=require("./models/chat.js");

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



app.get("/",(req,res)=>{
    res.send("working root");
})

//home route
app.get("/chats",async (req,res)=>{
    let chats=await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
});

//new route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

//create route
app.post("/chats",(req,res)=>{
    let {from,message,to}=req.body;
    let date=new Date();
    let chat1=new Chat({from:from,message:message,to:to,created_at:date});
    chat1.save().then((res)=>{console.log(res)});
    res.redirect("/chats");
});

//edit route
app.get("/chats/:id/edit",async (req,res)=>{
    let{id}=req.params;
    let chat=await Chat.findById(id);
    res.render("edit.ejs",{chat});
});

//update route
app.put("/chats/:id",async (req,res)=>{
    let{message}=req.body;
    let{id}=req.params;
    let date=new Date();
    await Chat.findByIdAndUpdate(id,{message:message},{new:true,runValidators:true});
    await Chat.findByIdAndUpdate(id,{updated_at:date},{new:true,runValidators:true});
    res.redirect("/chats");
});

//destroy route
app.delete("/chats/:id/delete",async(req,res)=>{
    let {id}=req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

app.listen(8080,()=>{
    console.log("listening to port 8080");
})