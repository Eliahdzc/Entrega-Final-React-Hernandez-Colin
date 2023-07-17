import { useForm } from "react-hook-form";
import '../Contacto/Contacto.css'

const Contacto = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

  return (

    <div className="container">
        <h1 className="main-title">Contacto</h1>
        <form className="formulario" onSubmit={handleSubmit(enviar)}>

            <label className='etiqueta' htmlFor="nombre"> Nombre </label>
            <input className='input' type="text" {...register("nombre")} />
            <label className='etiqueta' htmlFor="nombre"> Apellido </label>
            <input className='input' type="text" {...register("nombre")} />
            <label className='etiqueta' htmlFor="nombre"> email </label>
            <input className='input' type="email" {...register("email")} />
            <label className='etiqueta' htmlFor="nombre"> Teléfono </label>
            <input className='input' type="phone" {...register("telefono")} />

            <button className="enviar" type="submit">Enviar</button>

        </form>
    </div>

  )
}


export default Contacto