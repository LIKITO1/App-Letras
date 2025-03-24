import styles from "./Cadastrar.module.css"
import {useState} from "react"
import Message from "../layout/Message.js"
function Cadastrar(){
    const [nome,setNome]=useState()
    const [letra,setLetra]=useState()
    const [message,setMessage]=useState("")
    const [type,setType]=useState()
    async function enviar(e){
        e.preventDefault()
        let dados={nome:nome,letra:letra}
        await fetch("https://backend-app-letras.onrender.com/cadastrar",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
           },
           body:JSON.stringify(dados)
        }).then((resp)=>resp.json()).then(()=>{
            setMessage("Música Cadastrada");
            setType("success")
        }).catch((err)=>{
            setType("danger");
            setMessage("Erro ao cadastrar a música")
        })
    }
    return(
        <div className={`container d-flex justify-content-center align-items-center flex-column`}>
            <h1>Cadastre uma Música Nova</h1>
            <form onSubmit={enviar} className="card p-5 gap-3 mt-3 bg-dark text-light">
                <label htmlFor="nome">Nome:</label>
                <input id="nome" name="nome" className={`form-control ${styles.nome}`} onChange={(e)=>{setNome(e.target.value)}}></input>
                <label htmlFor="letra">Letra:</label>
                <textarea className={`form-control ${styles.letra}`} onChange={(e)=>{setLetra(e.target.value)}}></textarea>
                <button type="submit" className={`btn btn-success`}>Cadastrar</button>
            </form>
            {message && message.length>0 && (
                <Message type={type} msg={message}/>
            )}
        </div>
    )
}
export default Cadastrar