import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <div id="product-1">
        <Products heading='Choose your favorite' data={productData} />
      </div>
      <div id="feature-1">
        <Feature />
      </div>
      <div id="product-2">
        <Products heading='Sweet Treats for You' data={productDataTwo} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
