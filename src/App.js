import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/bootsnav.css'
import Home from "./components/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import JobDetail from './components/JobDetail';
import CategoryJobs from './components/CategoryJobs';
import BrowseCategory from './components/BrowseCategory';
import BrowseJobs from './components/BrowseJobs';
import Form from './components/Form';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/job-detail/:title/:id" element={<JobDetail/>} />
          <Route path="/category/:category" element={<CategoryJobs/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/browse-jobs" element={<BrowseJobs/>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
