import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/common/Navbar';
import LoginPage from './pages/LoginPage';
import SignupPage from "./pages/SignupPage";
import Contact from './pages/Contact';
import ForgotPassword from './pages/ForgotPassword';
import VerifyEmail from './pages/VerifyEmail';
import Dashboard from './pages/Dashboard';
import BlogPage from './pages/BlogPage'
import CreateBlog from './components/Blogs/CreateBlog';
import UpdateBlog from './components/Blogs/UpdateBlog';
import ScrollToTop from './components/common/ScrollToTop';


function App() {

  return (
    <div className="w-screen min-h-screen bg-[#000814] flex flex-col font-inter">
        <ScrollToTop/>
        <Navbar/>

        <Routes>

          <Route path="/" element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/contact' element={<Contact/>}/>
          
          <Route path='/forgotPassword' element={<ForgotPassword/>}/>
          <Route path='/verify-email' element={<VerifyEmail/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>

          <Route path='/showAllBlogs' element={<BlogPage/>}/>
          <Route path='/blog/createBlog' element={<CreateBlog/>} />
          <Route path='/blog/userBlogs' element={<BlogPage/>} />
          <Route path='/blog/updateBlog' element={<UpdateBlog/>} />
          
        </Routes>

    </div>
  );
}

export default App;
