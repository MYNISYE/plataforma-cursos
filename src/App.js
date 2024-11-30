// App.js
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { Footer } from './components/Footer';
import About from './components/About';
import {ProductDetail} from './components/ProductDetail';
import {data} from './data'
import Contact from './components/Contact';
import Services from './components/Services';

function App() {  
  const [selectedProductId, setSelectedProductId] = useState(null);

    
  
  return (
    <Router>
      <div>
        <Header 
		
		/>
        <Routes>
          <Route path="/services" element={<Services/>}>Servicios</Route>
          <Route path="/about" element={<About/>}>Acerca de</Route>
          <Route path="/contact"element={<Contact/>}>Contacto</Route>
          <Route path="/" element={<ProductList products={data} setSelectedProduct={setSelectedProductId} />} />
          <Route path="/product/:productId" element={<ProductDetail selectedProductId={selectedProductId} />} />
                
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
