import { useState } from 'react';
import {Link} from "react-router"
import loading from "../src/imgs/loading.svg"
function App() {
  const [data,setData]=useState()
  function requisitar(){
    fetch("http://localhost:5000/api",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    }).then((req)=>req.json()).then((data)=>{
        setData(data)
    })
  }
  requisitar()
  return (
    <div className={`container position-relative`}>
      <h1>Músicas:</h1>
      {data&&(
        <div>{data.map((valor)=>{
          return <div key={valor?.id}><Link to={`/visualizar/${valor?.id}`} key={valor?.id}>{valor?.nomes}</Link></div>
        })}</div>
      )}
      {!data&&(
        <div className={`position-absolute h-100 w-100 d-flex align-items-center justify-content-center`}>
          <img src={loading} width={50} height={50}></img>
        </div>
      )}
    </div>
  )
}
export default App;