import React, { useState } from "react";
import "./App.css";
import Map from "./components/Map";
import Form from "./components/Form";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Navigate to="home" />} />
        <Route  path="/form" element={<Form setData={setData}/>} />
          <Route path='/simulate' element={<Map data={data} setData={setData} /> } />
          <Route path='/home' element={<Main/> } />
          <Route path='/contact' element={<Contact/> } />
          <Route path='/about' element={<About/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
