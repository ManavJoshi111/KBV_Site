import './CSS/App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Activities from './Components/Activities';
import Contact from './Components/Contact';
import About from './Components/About';
import Header from './Components/Header';
import Admission from './Components/Admission';
import Academics from './Components/Academics';
import Achievements from './Components/Achievements';
import Hostel from './Components/Hostel';
import Acti_1 from './Components/Acti_1';
import Acti_2 from './Components/Acti_2';

function App() {
  return (
    <>
    <Router>
    <div className="App">
      <Navbar />
    </div>
    <Routes>
        <Route exact path="/" element={<Header />} ></Route>
        {/* <Route exact path="/activites" element={<Activities />} ></Route> */}
        <Route exact path="/acti_1" element={<Acti_1/>} ></Route>
        <Route exact path="/acti_2" element={<Acti_2/>} ></Route>


        <Route exact path="/about" element={<About />} ></Route>
        <Route exact path="/admission" element={<Admission/>} ></Route>
        <Route exact path="/academics" element={<Academics/>}></Route>
        <Route exact path="/achievements" element={<Achievements/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
        <Route exact path="/hostel" element={<Hostel/>}></Route>
        
    </Routes>
    </Router>
    </>
  );
}

export default App;
