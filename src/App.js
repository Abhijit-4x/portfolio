
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/contact" element={<Contact />} />  
        <Route path="/about" element={<About />} />  
        <Route path="/portfolio" element={<Portfolio />} />  
      </Routes>
    </>
  );
}

export default App;
