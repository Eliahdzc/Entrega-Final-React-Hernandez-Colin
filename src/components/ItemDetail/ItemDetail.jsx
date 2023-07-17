import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router";
import { getDoc, doc } from '@firebase/firestore'
import { db } from '../../firebase/config'
import '../ItemDetail/ItemDetail.css'
import { Link } from "react-router-dom";



const ItemDetail = () => {
    const [item, setItem] = useState({})
    const { id } = useParams()
    console.log('id', id)
    const { carrito, agregarAlCarrito } = useContext(CartContext);

    useEffect(() => {

        const prod = doc(db, "Productos", id) //
        getDoc(prod)
            .then((resp) => {
                setItem({ ...resp.data() })
                console.log('resp prod', resp.data())
            })

    }, [])

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    return (
        <div className="container">
            <div className="contenedor-detalles">
                <div className="titulo-categoria">
                    <h4>{item.categoria}</h4>
                </div>

                <div className="producto-detalles">
                    <div>
                        <img className="imagen-item" src={`../${item.imagen}`} alt={item.titulo} />
                    </div>
                    <div>
                        <img className="descripcion-item" src={`../${item.descripcion}`}></img>
                        <p className="categoria">Categoría: {item.categoria}</p>
                        <p className="categoria">Stock: {item.stock}</p>
                        <p className="precio">Precio: ${item.precio}</p>
                    </div>
                </div>
                <div>
                    <ItemCount
                        cantidad={cantidad}
                        handleSumar={handleSumar}
                        handleRestar={handleRestar}
                        handleAgregar={() => { agregarAlCarrito({ ...item, id }, cantidad) }}
                    />
                    <button className='boton'>
                        <Link className='link' to="/Productos">Seguir Comprando</Link>
                    </button>
                    <button className='boton'>
                        <Link className='link' to="/Carrito">Ir al Carrito</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail

