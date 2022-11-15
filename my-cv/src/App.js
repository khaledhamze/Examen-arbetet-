
import './App.css';
import Home from './components/pages/Home';
import Shoolassignments from './components/pages/Shoolassignments';
 import Mybackground from './components/pages/Mybackground';
 import Connectme from './components/pages/Connectme';
 import Aboutme from './components/pages/Aboutme';
 import Projectscourses from './components/pages/Projectscourses';
 import NotFound from './components/pages/NotFound';
 import Footer from './components/Footer'
 import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
            
            <Route  path="/" element={<Home />} />
            <Route  path="/Shoolassignments" element={<Shoolassignments />} />
            <Route  path="/mybackground" element={<Mybackground />} />
            <Route  path="/connectme" element={< Connectme />} />
            <Route  path="/aboutme" element={< Aboutme />} />
            <Route  path="/projectscourses" element={< Projectscourses/>} />
            <Route  path="/Footer" element={<Footer/>} />
            
            <Route  path="*" element={<NotFound />} />
            
          </Routes>     
      
       </BrowserRouter>

        
      
    </div>
  );
}

export default App;
