import React, { useState, useEffect }  from 'react';
import axios from "axios";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import MenuPage from "./pages/MenuPage/MenuPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Success from './pages/Success/Success';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/success' element={<Success />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
