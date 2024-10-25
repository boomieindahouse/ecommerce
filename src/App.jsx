import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; // นำเข้า Footer
import Homepage from './pages/HomePage';
import Signup from './pages/SignUpPage';
import Signin from './pages/SigninPage';
import ContactPage from './pages/ContactPage';
import About from './pages/AboutPage';

function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} /> 
          <Route path="/SignUp" element={<Signup />} /> 
          <Route path="/SignIn" element={<Signin />} /> 
          <Route path="/Contact" element={<ContactPage />} /> 
          <Route path="/About" element={<About />} /> 
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
