import '../ItemListContainer/ItemListContainer.css'
import { useState, useEffect } from "react"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from '@firebase/firestore'
import { db } from '../../firebase/config'

const ItemListContanier = () => {

    const [productos, setProductos] = useState([])

    const [titulo, setTitulo] = useState("Productos")

    const { categoria } = useParams()


    useEffect(() => {

        const productosRef = categoria ? query(collection(db, "Productos"), where("categoria", "==", categoria)) : collection(db, "Productos");
        getDocs(productosRef)
            .then((resp) => {
                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })

                );
                setTitulo(!categoria ? "Productos" : categoria)
            })

    }, [categoria])


    return (
        <div>
            <ItemList productos={productos} titulo={titulo} />
        </div>
    )
}

export default ItemListContanier