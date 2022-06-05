import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./style.css";
import Login from './components/Login'
import Content from './components/Content'
export default function App() {
  return (
   <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
          <Route path="/content" element={<Content />} />
      </Routes>
    </BrowserRouter>
   
  
   </>
  );
}
