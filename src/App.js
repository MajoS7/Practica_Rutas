import './App.css';
import { AboutUs } from './components/Pages/AboutUs/AboutUs';
import { Home } from './components/Pages/Home/Home';
import { Contact } from './components/Pages/Contact/Contact';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
