import React, { useState, useEffect }  from 'react';
import axios from "axios";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
// import './App.scss';

// import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import MenuPage from "./pages/MenuPage/MenuPage";
import ShopPage from "./pages/ShopePage/ShopePage";
// import Success from './components/Success/Success';
// import NotFound from './components/NotFound/Notfound';

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/upload' element={<MenuPage />} />
          <Route path='/sign' element={<ShopPage />} />
          {/* <Route path='/success' element={<Success />} /> */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
