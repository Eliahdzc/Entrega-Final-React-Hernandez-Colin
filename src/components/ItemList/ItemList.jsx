import Item from "../Item/Item"


const ItemList = ({ productos, titulo, categoria }) => {

    return (
        <div>
            <h2 className="titulo-categoria">{titulo}</h2>
            <h2 className="titulo-categoria">{categoria}</h2>

            <div className="productos">
                {productos.map((prod) =>
                    <Item producto={prod} key={prod.id} />
                )}
            </div>
        </div>
    )
}

export default ItemList