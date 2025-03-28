import Message from "./Message.js"
import {useState} from "react"
import styles from "./BtnApagar.module.css"
function BtnApagar({id}){
    const [message,setMessage]=useState("")
    const [type,setType]=useState()
    async function apagar(){
        await fetch(`https://backend-app-letras.onrender.com/api/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        }).then(()=>{
            setMessage("Música excluída")
            setType("success")
            setTimeout(()=>{
                setMessage("Fazendo alterações...")
            },1000)
            setTimeout(()=>{
                window.location.reload()
            },2000)
        }).catch((err)=>{
            setMessage("Algo deu errado ao excluir a música")
            setType("danger")
        })
    }
    return(
        <>
            <button onClick={apagar} className={`btn btn-danger ${styles.apagar}`}>Apagar</button>
            {message&&message.length>0&&(
                <Message type={type} msg={message}/>
            )}
        </>
    )
}
export default BtnApagar;