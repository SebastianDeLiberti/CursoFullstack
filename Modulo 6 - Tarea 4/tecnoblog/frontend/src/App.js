import React from 'react';

import "./App.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";

import Contacto from './paginas/Contacto';
import Enlaces from './paginas/Enlaces';
import Nosotros from './paginas/Nosotros';
import Noticias from './paginas/Noticias';
import Tutoriales from './paginas/Tutoriales';
import Index from './paginas/Index';
import Post from './paginas/Post';
import Search from './paginas/Search';

function App() {

  return (

    <div className="App">

      <Header/>

      <BrowserRouter>
      
        <Nav/>

        <Routes>

          <Route path="/" element={<Index/>}/>
          <Route path="Tutoriales" element={<Tutoriales/>}/>
          <Route path="Noticias" element={<Noticias/>}/>
          <Route path="Nosotros" element={<Nosotros/>}/>
          <Route path="Enlaces" element={<Enlaces/>}/>
          <Route path="Contacto" element={<Contacto/>}/>
          <Route path="Search*" element={<Search/>}/>
          <Route path="/*" element={<Post/>}/>

        </Routes>
      
      </BrowserRouter>
      

      <Footer/>

    </div>

  );

}

export default App;
