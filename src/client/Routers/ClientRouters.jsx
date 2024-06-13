import React from "react";
import Navigation from "../components/navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { HomePage } from "../pages/homePage/HomePage";
import Cart from "../components/cart/Cart";
import Product from "../components/products/Product";
import ProductDetalis from "../components/productDetails/ProductDetails";
import Checkout from "../components/checkout/Checkout";
import Order from "../components/order/Order";
import OrderDetails from "../components/order/OrderDetails";

const ClientRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/register" element={<HomePage />} />
        <Route path="/login" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetalis />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/orders" element={<Order />} />
        <Route path="/account/orders/:orderId" element={<OrderDetails />} />
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ClientRouters;
