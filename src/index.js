import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Add } from "./components/Add";
import About from "./components/About";
import Diary from "./components/diary";
import Error from "./components/Error";
import Edit from "./components/Edit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/add" element={<Add />} />
      <Route path="/about" element={<About />} />
      <Route path="/Diary" element={<Diary />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
