
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navabar';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuItems from './components/MenuItems';

function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:menuId" element={<MenuItems/>}/>
      </Routes>
      <ToastContainer/>
    </Router>
  );
}

export default App;
