import React from 'react'
import Navigation from '../components/navigation/Navigation'
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import { HomePage } from '../pages/homePage/HomePage';
import Cart from '../components/cart/Cart';
import Product from '../components/products/Product';
import ProductCard from '../components/products/ProductCard';

const ClientRouters = () => {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}/>
            {/* <Route path='/product/:productId' element={<ProductCard/>}/> */}
        </Routes>

        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default ClientRouters