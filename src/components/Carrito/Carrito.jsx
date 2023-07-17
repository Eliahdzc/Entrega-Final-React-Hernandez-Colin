import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
// import { setIndexConfiguration } from '@firebase/firestore';
import './Carrito.css'

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className="container">
            <h1 className="titulo-carrito">Productos en Carrito</h1>

            {
                carrito.map((prod, index) => (
                    <div className="tarjeta-carrito" key={`${prod.id}${index}`}>
                        <div>
                            <img className='imagen-items' src={`../${prod.imagen}`} alt={prod.titulo} />
                        </div>
                        <div>
                            <br />
                            <h3>{prod.titulo}</h3>
                            <p>Precio unit: ${prod.precio}</p>
                            <p>Precio total: ${prod.precio * prod.cantidad}</p>
                            <p>Cant: {prod.cantidad}</p>
                            <br />
                        </div>
                    </div>
                ))
            }

            {
                carrito.length > 0 ?
                <div>
                    <h2 className='precio-total'>Precio total: ${precioTotal()}</h2>
                    <div className='botones-carrito'>
                    <button className='boton' onClick={handleVaciar}>Vaciar</button>
                    <button className='boton'>
                     <Link className='link' to="/checkout">Finalizar compra</Link>
                    </button>
                    <button className='boton'>
                    <Link className='link' to="/Productos">Seguir Comprando</Link>
                    </button>
                    </div>
                </div> :
                <>
                    <h2>El carrito está vacío :(</h2>
                    <button className='boton'>
                    <Link className='link' to="/Productos">Seguir Comprando</Link>
                    </button>

                </>
            }

        </div>
    )
}

export default Carrito