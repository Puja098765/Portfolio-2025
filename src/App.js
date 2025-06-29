import {Routes,Route} from 'react-router-dom';
import Home from  "./containers/home";
import About from "./containers/about";
import Contact from "./containers/contact";
import Portfolio from "./containers/portfolio";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import './App.css';
import Navbar from './components/navBar';

function App() {
  return (
    <div className="App">
    <Navbar/>

      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route index path="/about" element={<About/>}/>
        <Route index path="/contact" element={<Contact/>}/>
        <Route index path="/portfolio" element={<Portfolio/>}/>
        <Route index path="/resume" element={<Resume/>}/>
        <Route index path="/skills" element={<Skills/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
