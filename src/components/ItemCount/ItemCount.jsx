import React from 'react'
import '../ItemCount/ItemCount.css'

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {

  return (
    <div>

      <div className="contador">
        <button className='botones' onClick={handleRestar}>-</button>
        <p>{cantidad}</p>
        <button className='botones' onClick={handleSumar}>+</button>
      </div>
      <button className="botones" onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount