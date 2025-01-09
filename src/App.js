
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/bootsnav.css'
import Home from "./components/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import JobDetail from './components/JobDetail';
import Form from './components/Form';



function App() {
  return (

    <>
    
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        
      </Routes>
    </HashRouter>
    
    </>
    
  );
}

export default App;
