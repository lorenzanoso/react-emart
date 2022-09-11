
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import NavigationBar from './components/NavigationBar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Product from './components/pages/Product';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Login from './components/pages/authentication/Login';
import SignUp from './components/pages/authentication/SignUp';
import Cart from './components/pages/Cart';


function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/products" element={ <Products />}/>
        <Route path="/product/:id" element={ <Product />}/>
        <Route path="/about-us" element={ <AboutUs />}/>
        <Route path="/contact-us" element={ <ContactUs />}/>
        <Route path="/login" element={ <Login />}/>
        <Route path="/signup" element={ <SignUp />}/>
       <Route path="/cart" element={ <Cart />}/>

      </Routes>   
    </BrowserRouter> 
  );
}

export default App;
