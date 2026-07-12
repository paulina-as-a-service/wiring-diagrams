import { Routes, Route, Navigate } from 'react-router-dom';
import FourWayPage from './pages/FourWayPage.jsx';
import ThreeWayPage from './pages/ThreeWayPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/4-way" replace />} />
      <Route path="/4-way" element={<FourWayPage />} />
      <Route path="/3-way" element={<ThreeWayPage />} />
    </Routes>
  );
}
