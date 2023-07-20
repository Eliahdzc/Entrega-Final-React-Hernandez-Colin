import "../Item/Item.css"
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {

    return (
        <div className="producto">
            <img src={producto.imagen} alt={producto.titulo} />
            <div className="producto">
                <h4>{producto.titulo}</h4>
                <p>Categoria: {producto.categoria}</p>
                <p>Stock: {producto.stock}</p>
                <p>Precio: ${producto.precio}</p>
                <button className="boton-detalles">
                    <Link className="boton-link" to={`/productos/categoria/${producto.id}`}>
                        Descripción
                    </Link>
                </button>

            </div>
        </div>
    )
}

export default Item