import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Inicio from './components/Inicio/Inicio'
import ItemDetail from './components/ItemDetail/ItemDetail'
import './App.css'
import { CartProvider } from './context/CartContext'
import Contacto from './components/Contacto/Contacto'
import Carrito from './components/Carrito/Carrito'
import Checkout from './components/Checkout/Checkout'


function App() {

  return (
    <div>
      <CartProvider>
        <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/productos/:categoria/:id" element={<ItemDetail />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

        </BrowserRouter>

      </CartProvider>

    </div>
  )
}

export default App
