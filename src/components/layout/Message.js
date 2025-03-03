import styles from "./Message.module.css"
import {useState} from "react"
function Message({msg,type,time}){
    const [visible,setVisible]=useState(true)
    if(!msg){
        return null;
    }
    if(!time){
        time=3000
    }
    setTimeout(()=>{
        setVisible(false)
    },time)
    return(
        <>
        {visible&&(
        <div className={`position-absolute bg-dark d-flex align-items-center justify-content-center p-3 ${styles.cont}`}>
            <p className={`text-${type}`}>{msg}</p>
        </div>
    )}
        </>
    )
}
export default Message