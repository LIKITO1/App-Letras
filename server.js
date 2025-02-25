const express=require("express");
const app=express()
const cors=require("cors")
const mysql=require("mysql2")
const bodyParser=require("body-parser")
app.use(cors())
app.use(bodyParser.json());
const connection=mysql.createConnection({
    user:"root",
    password:"MGyTTOmhgFIUiqnoXqeffuDwhDLrHtkf",
    host:"shortline.proxy.rlwy.net",
    database:"railway",
    port:"15934"
})
connection.connect((err)=>{
    if(err) console.log(err);
    console.log("Conectado!")
})
app.post("/cadastrar",(req,res)=>{
    const {nome,letra} =req.body;
    connection.query(`INSERT INTO musicas(nomes,letras) VALUES(?,?)`,[nome,letra],(err,valor)=>{
        if(err) console.log(err);
    })
})
app.get("/api/:id",(req,res)=>{
    connection.query(`SELECT * FROM musicas WHERE id=${req.params.id}`,(err,valor)=>{
        if(err) console.log(err);
        res.send(valor)
    })
})
app.get("/api",(req,res)=>{
    connection.query("SELECT * FROM musicas",(err,valor)=>{
        if(err) console.log(err);
        res.send(valor)
    })
})
app.listen(5000,(err)=>{
    if(err) console.log(err);
    console.log("Rodando...")
});