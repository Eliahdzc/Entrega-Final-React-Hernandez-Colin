import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router";
import { getDoc, doc } from '@firebase/firestore'
import { db } from '../../firebase/config'
import '../ItemDetail/ItemDetail.css'
import { Link } from "react-router-dom";



const ItemDetail = (  ) => {
    const [item, setItem] = useState({})
    const {id} = useParams()
    console.log('id', id)
    const { carrito, agregarAlCarrito } = useContext(CartContext);

    useEffect(() => {

        const prod = doc(db, "Productos", id) //
        getDoc(prod)
        .then((resp) => {
            setItem({...resp.data()})
            console.log('resp prod', resp.data())
        })

    },[])

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad <item.stock && setCantidad(cantidad + 1)
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
                        handleAgregar={() => { agregarAlCarrito({...item, id}, cantidad) }}
                    />
                     <button className='boton'>
                    <Link className='link' to="/Productos">Seguir Comprando</Link>
                    </button>
                    </div>
            </div>
        </div>
    )
}

export default ItemDetail















// import "../ItemDetail/ItemDetail.css"
// import { Link, useParams } from "react-router-dom"
// // import {itemPorId} from '../../data/data'
// import { useEffect, useState } from "react"
// import { doc, getDoc } from "@firebase/firestore"
// import { db } from "../../firebase/config"

// const ItemDetail = () => {

//     const [item, setItem] = useState({})
//     const {id, categoria} = useParams()
//     console.log(id, categoria)

//     // Obtiene el producto de acuerdo al id recibido en la ruta
//     // itemPorId(id)
//     //     .then(res => {
//     //         setItem(res)
//     //     })
//     const itemPorId = doc(db, "Productos", `${id}`);
//     console.log(itemPorId)

//     const returnedData = async (docRef) => {
//         let response;
//         const clubSnapshot = await getDoc(docRef).then(resp => response = resp.imagen)
//         return response
//     }

//       // Pass the reference itself to the function instead of doc ID
//     const club = returnedData(itemPorId).then(resp => console.log(resp))

//     console.log(club)
//         // .catch(err => {
//         //     alert('No hay informacion disponible')
//         //     console.error(err)
//         // })

//     // Se asegura que el producto tenga la categoria solicitada
//     // o manda un error para que se avise al usuario
//     const categoriaCorrecta = categoria === item.categoria

//     return (
//         <div className="contanier">
//             {categoriaCorrecta ?
//                 <div className="producto-detalle">
//                     <img src={`../${item.imagen}`} alt={item.titulo} />
//                     <div>
//                         <img src={`../${item.descripcion}`} alt={item.titulo} />
//                         <p className="precio-detalle">Precio : {item.precio}</p>
//                     </div>

//                 </div>
//                 : <div>
//                     <h1>No encontramos el producto</h1>
//                 </div>
//             }
//             <Link to= {`/productos/${categoria}`}>
//                 <button className="boton-detalles">Regresar</button>
//             </Link>
//         </div>
//     )
// }

// export default ItemDetail