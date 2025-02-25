import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/layout/Menu"
import Cadastrar from "./components/pages/Cadastrar"
import Visualizar from "./components/pages/Visualizar"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Menu/>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/cadastrar" element={<Cadastrar/>}></Route>
        <Route path="/visualizar/:id" element={<Visualizar/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);