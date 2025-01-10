import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/bootsnav.css'
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobDetail from './components/JobDetail';
import CategoryJobs from './components/CategoryJobs';
import BrowseCategory from './components/BrowseCategory';
import BrowseJobs from './components/BrowseJobs';
import Form from './components/Form';
import Categories from './components/Categories';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/job-detail/:title/:id" element={<JobDetail/>} />
          <Route path="/category/:category" element={<CategoryJobs/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/browse-jobs" element={<BrowseJobs/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
