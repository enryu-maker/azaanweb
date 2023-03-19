import React, { Suspense } from 'react';
import Main from './Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Terms from './Terms';
export default function App() {


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: "#f7faf9"
    }}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/terms" element={<Terms />}/>
      </Routes>
    </BrowserRouter>

    </div>
  )
}
