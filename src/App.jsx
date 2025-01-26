import { useState } from "react";
import "./App.css";
import Navber from "./pages/Nav";
import HomeItem from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorsFunc from "./pages/Erros";

function App() {
  return (
    <>

      <BrowserRouter>
        <Navber/>
        <Routes>

          <Route path="/" element = {<HomeItem/>}/>
          <Route path="About Us" element = {<ErrorsFunc/>}/>
          <Route path="Pricing" element = {<ErrorsFunc/>}/>
          <Route path="Customers" element = {<ErrorsFunc/>}/>
          <Route path="Solutions" element = {<ErrorsFunc/>}/>
        </Routes>
        
      </BrowserRouter>

      
    </>
  );
}

export default App;
