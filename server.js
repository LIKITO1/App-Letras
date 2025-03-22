require("dotenv").config()
const express=require("express");
const app=express()
const cors=require("cors")
const mysql=require("mysql2")
const bodyParser=require("body-parser")
app.use(cors())
app.use(bodyParser.json());
const pool=mysql.createPool({
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    host:process.env.DB_HOST,
    database:process.env.DB,
    port:process.env.PORT
})
app.post("/cadastrar",(req,res)=>{
    const {nome,letra}=req.body;
    pool.query(`INSERT INTO musicas(nomes,letras) VALUES(?,?)`,[nome,letra],(err,valor)=>{
        if(err) console.log(err);
        res.send(true)
    })
})
app.get("/api/:id",(req,res)=>{
    pool.query(`SELECT * FROM musicas WHERE id=?`,[req.params.id],(err,valor)=>{
        if(err) console.log(err);
        res.send(valor)
    })
})
app.get("/api",(req,res)=>{
    pool.query("SELECT * FROM musicas",(err,valor)=>{
        if(err) console.log(err);
        res.send(valor)
    })
})
app.delete("/api/:id",(req,res)=>{
    pool.query(`DELETE FROM musicas WHERE id=?`,[req.params.id],(err,valor)=>{
        if(err) console.log(err);
        res.send(true)
    })
})
app.listen(5000,(err)=>{
    if(err) console.log(err);
    console.log("Rodando...")
});