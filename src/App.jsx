import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  Navbar  from './components/Navbar'
import Header from './components/Header'
import Home from './pages/Home'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Cart from './pages/Cart'
import Footer from './components/Footer'


function App() {
  
  return (
    <Router>

    <Navbar></Navbar>
    <Header></Header>

    <Routes>

      <Route path='/' element={<Home></Home>} />
      <Route path='/register' element={<RegisterPage></RegisterPage>} />
      <Route path='/login' element={<LoginPage></LoginPage>} />
      <Route path='/cart' element={<Cart></Cart>} />
    
    </Routes> 

    <Footer></Footer>
    
    </Router>
  )
}

export default App;
