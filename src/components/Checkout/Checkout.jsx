import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from '../../firebase/config';
import { CartContext } from '../../context/CartContext';
import '../Checkout/Checkout.css'

const Checkout = () => {


    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);


    const { register, handleSubmit } = useForm();


    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
                calcularStock(carrito)
            })
    }

    const calcularStock = (carrito) => {
        let stock = []

        carrito.map((elem) => {
            let stockFinal = Number(elem.stock) - Number(elem.cantidad)
            stockFinal = stockFinal <= 0 ? 0 : stockFinal
            stock.push({
                id: elem.id,
                stock: stockFinal
            })
            return
        })

        stock.map(async (elem) => {
            const productoRef = doc(db, "Productos", elem.id);

            await updateDoc(productoRef, {
                stock: elem.stock
            });
            return
        })
        return
    }


    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p className='parrafo'>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

    return (
        <div className="container">
            <h1 className="main-title">Finalizar compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>

                <label className='etiqueta' htmlFor="nombre"> Nombre </label>
                <input className='input' type="text" {...register("nombre")} />
                <label className='etiqueta' htmlFor="nombre"> Apellido </label>
                <input className='input' type="text" {...register("nombre")} />
                <label className='etiqueta' htmlFor="nombre"> email </label>
                <input className='input' type="email" {...register("email")} />
                <label className='etiqueta' htmlFor="nombre"> Teléfono </label>
                <input className='input' type="phone" {...register("telefono")} />

                <button className="enviar" type="submit">Comprar</button>

            </form>
        </div>
    )
}


export default Checkout