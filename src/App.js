import {Routes,Route, useLocation} from 'react-router-dom';
import Home from  "./containers/home";
import About from "./containers/about";
import Contact from "./containers/contact";
import Portfolio from "./containers/portfolio";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import './App.scss';
import Navbar from './components/navBar';
import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles';
import particles from "./utils.js/particles";

function App() {

  const location = useLocation();
   const handleInit = async (main)=>{
    await loadFull(main);
   }
const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">

      {
        renderParticleJsInHomePage && (
          <Particles id="particles" options={particles}  init={handleInit}/>
        )
      }

    <Navbar/>
 <div className="App__main-page-content">
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route index path="/about" element={<About/>}/>
        <Route index path="/contact" element={<Contact/>}/>
        <Route index path="/portfolio" element={<Portfolio/>}/>
        <Route index path="/resume" element={<Resume/>}/>
        <Route index path="/skills" element={<Skills/>}/>
       
      </Routes>
      </div>
    </div>
  );
}

export default App;
