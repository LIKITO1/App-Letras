import {useParams} from "react-router-dom"
import {useState} from "react"
function Visualizar(){
    const {id}=useParams()
    const [letra,setLetra]=useState()
    fetch(`http://localhost:5000/api/${id}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    }).then((res)=>res.json()).then((data)=>{
        setLetra(data[0]?.letras)
        if(letra){
        for(let i=0;i<data[0].letras.length;i++){
            if(data[0]?.letras[i]=="\n"){
                letra.replace("\n","%")
            }
        }
    }
    })
    return(
        <div className={`container`}>
            {letra}
        </div>
    )
}
export default Visualizar