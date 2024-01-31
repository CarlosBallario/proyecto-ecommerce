import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
   return(
    <div>
    <nav>
        <div className="div1">
        <Link to={'/'} className="linkContainer">
        <img src="/Imagenes/batman3.png" alt="" className="logo"/>
            <h2 className="titleLogo">Redwork Argentina</h2>
        </Link>
            <ul>
                <li>
                    <Link to={'/'}>Todas las Notebook</Link>            
                </li>
                <li>
                   <Link to={'/category/asus'}>Asus</Link>
                </li>
                <li>
                   <Link to={'/category/dell'}>Dell</Link>
                </li>
                <li>
                   <Link to={'/category/msi'}>MSI</Link>
                </li>
            </ul>
            <CartWidget/>    
        </div>
    </nav>
    </div>
   )
}

export default NavBar