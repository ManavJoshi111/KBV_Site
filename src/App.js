import './CSS/App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Activities from './Components/Activities';
import Contact from './Components/Contact';
import About from './Components/About';
import Header from './Components/Header';

function App() {
  return (
    <>
    <Router>
    <div className="App">
      <Navbar />
    </div>
    <Routes>
        <Route exact path="/" element={<Header />} ></Route>
        <Route exact path="/activites" element={<Activities />} ></Route>
        <Route exact path="/contact" element={<Contact />} ></Route>
        <Route exact path="/about" element={<About />} ></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
