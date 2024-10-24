import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Homepage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
