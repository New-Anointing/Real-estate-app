import Home from "./components/pages/home";
import Navbar from './components/inc/navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/main.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route exact path="/property" element={<Property />} />
          </Routes>
          <Routes>
            <Route exact path="/agents" element={<Agents />} />
          </Routes>
          <Routes>
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
          <Routes>
            <Route exact path="/login" element={<Login />} />
          </Routes> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
