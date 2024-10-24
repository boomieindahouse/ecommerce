import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; // นำเข้า Footer
import Homepage from './pages/HomePage';
import Signup from './pages/SignUpPage';

function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} /> 
          <Route path="/SignUp" element={<Signup />} /> 
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
