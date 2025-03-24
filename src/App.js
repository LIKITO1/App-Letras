import { useState, useEffect } from 'react';
import {Link} from "react-router"
import loading from "./imgs/loading.svg"
import "./App.css"
import BtnApagar from './components/layout/BtnApagar';
import Message from "./components/layout/Message"
function App() {
  const [data,setData]=useState()
  const [message,setMessage]=useState("")
  const [type,setType]=useState()
  async function requisitar(){
    await fetch("/api",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    }).then((req)=>req.json()).then((data)=>{
        setData(data)
    }).catch((err)=>{
        setMessage("Erro ao carregar as músicas")
        setType("danger")
    })
  }
  useEffect(()=>{
    requisitar()
  },[message])
  return (
    <div className={`container position-relative`}>
      <h1>Músicas:</h1>
      {data&&(
        <div>{data.map((valor)=>{
          return <div key={valor?.id} className="teste"><Link to={`/visualizar/${valor?.id}`} key={valor?.id} className="link">{valor?.nomes}</Link><BtnApagar id={valor?.id}/></div>
        })}</div>
      )}
      {!data&&(
        <div className={`position-absolute h-100 w-100 d-flex align-items-center justify-content-center`}>
          <img src={loading} width={50} height={50} alt="Loading..."></img>
        </div>
      )}
      {message&&message.length>0&&(
        <Message msg={message} type={type}/>
      )}
    </div>
  )
}
export default App;