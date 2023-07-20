import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logo/Logo"
import '../NavBar/NavBar.css'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="nav">
      <Logo />

      <ul className="barra">
        <li ><Link className="lista" to="/">Inicio</Link></li>
        <li ><Link className="lista" to="/productos">Productos</Link></li>
        <li ><Link className="lista" to="/productos/Pasteles">Pasteles</Link></li>
        <li ><Link className="lista" to="/productos/Cupcakes">Cupcakes</Link></li>
        <li ><Link className="lista" to="/productos/Brownies">Brownies</Link></li>
        <li ><Link className="lista" to="/productos/Galletas">Galletas</Link></li>
        <li ><Link className="lista" to="/productos/Pays">Pays</Link></li>
        <li><Link className="lista" to="/contacto">Contacto</Link></li>
        <li><CartWidget /></li>
      </ul>

    </div>
  )
}

export default NavBar