import '../Inicio/Inicio.css'
import {useState} from "react"
import { Link } from 'react-router-dom'


const Inicio = () => {

    const [nombre, setNombre] = useState("")
    const [existeSaludo, setExisteSaludo] = useState(false)

   
    const handleChange = (event) => {
        setNombre(event.target.value)
    }


    const validarSaludo = () => {
        if (nombre.length > 3 && nombre !== '') {
            setExisteSaludo(true)
        }
    }



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
                    <h2 className='saludo'>Y nos gustaría que sea aún mas dulce para ti</h2>
                    <h2 className='saludo'>{nombre}</h2>
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