import styles from "./Menu.module.css"
import {Link} from "react-router"
function Menu(){
    return(
        <div className={`position-relative w-100 ${styles.menu} bg-dark d-flex justify-content-around align-items-center`}>
            <Link to="/" className={`${styles.link} text-light`}>Home</Link>
            <Link to="/cadastrar" className={`${styles.link} text-light`}>Cadastrar Música</Link>
        </div>
    )
}
export default Menu