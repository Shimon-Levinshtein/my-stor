import React from 'react';
import './App.css';
import Header from './componenens/Header/Header';
import SearchBar from './componenens/SearchBar/SearchBar';
import Products from './componenens/Products/Products';
import ProductDitail from './componenens/ProductDitail/ProductDitail';
import Pagination from './componenens/Pagination/Pagination';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <div className="div-middle-block-page">
        <Products />
        <ProductDitail />
      </div>
      <Pagination />
    </div>
  );
}

export default App;
