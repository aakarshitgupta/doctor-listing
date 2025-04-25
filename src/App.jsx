import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DoctorListingPage from './pages/DoctorListingPage';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DoctorListingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
