import '../Inicio/Inicio.css'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { collection, getDocs, query, limit } from '@firebase/firestore'
import { db } from '../../firebase/config'
import Item from "../Item/Item"
import "../Item/Item.css"


const Inicio = () => {
    const [nombre, setNombre] = useState("")
    const [existeSaludo, setExisteSaludo] = useState(false)
    const [productosInicio, setProductosInicio] = useState([])

    const handleChange = (event) => {
        setNombre(event.target.value)
    }

    const validarSaludo = () => {
        if (nombre.length > 3 && nombre !== '') {
            setExisteSaludo(true)
        }
    }

    useEffect(() => {
        const q = query(collection(db, "Productos"), limit(5))
        getDocs (q)
            .then((resp) =>{
                console.log("array", resp)

                resp.docs.map(elem => {
                    console.log("resultado", elem.data())
                })
                setProductosInicio(
                    resp.docs.map((doc) => {
                        return { ...doc.data()}
                    })
                )
            })
    }, [])

    return (
        <div className='contenedor'>
            <div className='cont-login'>
                <h1 className='titulo-1'>La Vida es Dulce</h1>
                {!existeSaludo ?
                    <>
                        <h2 className='nombre'>Escribe tu Nombre</h2>
                        <input onChange={handleChange} value={nombre} className='input-nombre' type="text" />
                        <button className='boton' onClick={validarSaludo}>Aceptar</button>
                    </>
                    : null
                }
            </div>
            {existeSaludo ?
                <div className='cont-saludo'>
                    <h2 className='saludo'>Y nos gustaría que sea aún mas dulce para ti {nombre}</h2>

                    <div className='productos-inicio'>
                        {
                            productosInicio.map((producto, index) => {
                                return <Item producto={producto} key={index} />
                            })
                        }
                    </div>


                    <button className='boton'>
                        <Link className='link' to="/Productos">Ver Productos</Link>
                    </button>
                </div>

                : null
            }
        </div>
    )
}

export default Inicio