
import About from './About';
import Home from './Home';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Blog from './Blog';
import Contact from './Contact';
 import Navigation from './Navigation';
import PressKit from './PressKit';
import Faq from './Faq';

function App() {
  return (
    <div className="App">
        <Navigation /> 
       <Routes>
          <Route  path='/' element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog" element={<Contact />} />
          <Route path="presskit" element={<PressKit />} />
          <Route path="faq" element={<Faq />} />
       </Routes>


    </div>
  );
}

export default App;
