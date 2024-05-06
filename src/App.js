// import { Route, Routes } from 'react-router-dom';
import Footer from './client/components/footer/Footer';
import Navigation from './client/components/navigation/Navigation';
import Product from './client/components/products/Product';
// import { HomePage } from './client/pages/homePage/HomePage';

function App() {
  return (
    <div className="App">
      <div>
      <Navigation/>
      </div>
      <div>
        {/* <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/product' element={<Product/>}/>
        </Routes> */}
        {/* <HomePage/> */}
        <Product/>
      
      </div>
      <Footer/>
    </div>
  );
}

export default App;
