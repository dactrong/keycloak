
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import HomePage from "./HomePage";
import React from "react";

function App() {
  return (
   <div>
    <Routes>
      <Route index path="/login" element={ <Login/>}/>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
   </div>
  );
}

export default App;
