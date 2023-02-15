import React from 'react';
import './App.css';
import Navbar from './componant/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './componant/Products';
import Header from './componant/Header';
import SingalProduct from './View/SingalProduct';
import CartPage from './View/CartPage';
import Login from './componant/Login'
import Register from './componant/Register';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
   <Router>
    <Header/>
    <ToastContainer/>
  <Routes>
    <Route path='/' element={<Products/>} exact/>
    <Route path='/singalProduct/:id' element={<SingalProduct/>} />
    <Route path='/cart/:id?' element={<CartPage/>} />
    <Route path='/Login/:id' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
   
   
  </Routes>
  
   </Router>
  );
}

export default App;
