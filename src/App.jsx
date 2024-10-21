import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar'; 
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="content">
        <Routes>
          {/* กำหนดเส้นทางที่คุณต้องการ */}
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
