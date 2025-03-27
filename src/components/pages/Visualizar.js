import styles from "./Visualizar.module.css"
import {useParams} from "react-router-dom"
import {useState,useEffect,useRef} from "react"
import loading from '../../imgs/loading.svg'
function Visualizar(){
    const {id}=useParams()
    const [letra,setLetra]=useState()
    const contLetra=useRef("")
    useEffect(()=>{
    fetch(`https://backend-app-letras.onrender.com/api/${id}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    }).then((res)=>res.json()).then((data)=>{
        setLetra(data[0]?.letras)
        if(letra){
            contLetra.current=letra.replace(/\n/g,"<br>")
            setLetra(contLetra.current)
        }
    })
},[letra,id])
    return(
        <div>
            {!letra&&(
                <div className={`w-100 d-flex align-items-center justify-content-center`}>
                    <img src={loading} width={50} height={50} alt="Carregando..."></img>
                </div>
            )}
            {letra &&(
            <div className={`${styles.text}`} dangerouslySetInnerHTML={{__html:letra}}></div>
            )}
        </div>
    )
}
export default Visualizar;