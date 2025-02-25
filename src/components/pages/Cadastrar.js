import styles from "./Cadastrar.module.css"
import {useState} from "react"
function Cadastrar(){
    const [nome,setNome]=useState()
    const [letra,setLetra]=useState()
    function enviar(e){
        e.preventDefault()
        let dados={nome:nome,letra:letra}
        fetch("http://localhost:5000/cadastrar",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
           },
           body:JSON.stringify(dados)
        }).then(()=>{
            console.log("Foi")
        }).catch((err)=>{
            console.log(err)
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
        </div>
    )
}
export default Cadastrar