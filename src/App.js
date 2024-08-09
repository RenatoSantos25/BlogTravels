import './App.css'; 
import Home from '../src/pages/Home/Home';
import About from '../src/pages/About/About';
import Navbar from './components/Footer';
import Footer from './components/Navbar'; 
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Produto from './pages/Produtos/Produto';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() { 

    return (
      <div className="App"> 
      <AuthProvider>
        <BrowserRouter> 
        <Footer/>
          <div className="container"> 
            <Routes> 
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />     
              <Route path="/login" element={<Login />} />  
              <Route path="/produto" element={<Produto />} />  
              <Route path="/register" element={<Register />} />     
            </Routes>
          </div>
        <Navbar/>
        </BrowserRouter> 
        </AuthProvider>
      </div> 
    );  
} 

export default App; 