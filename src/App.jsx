import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Reserve from './components/ReserveForm/Reserve'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Hello from './components/Hello/Hello';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/hello" element={<Hello />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
