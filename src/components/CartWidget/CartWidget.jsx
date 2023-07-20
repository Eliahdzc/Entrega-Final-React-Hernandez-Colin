import { useContext } from 'react'
import { Link } from 'react-router-dom'
import carrito from '../../assets/images/carrito.png'
import '../CartWidget/CartWidget.css'
import { CartContext } from '../../context/CartContext'

const CarWidget = () => {

  const { cantidadEnCarrito } = useContext(CartContext)

  return (
    <div className='carrito'>
      <Link className='carrito-nombre' to="/carrito">
        Carrito
        <span className='contador-carrito'>{cantidadEnCarrito()}</span>
        <img className='imagen-carrito' src={carrito} alt="" />
      </Link>
    </div>
  )
}

export default CarWidget