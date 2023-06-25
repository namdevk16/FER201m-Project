import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/house/detail/:id' element={<DetailPage />} />
        <Route path='/changepassword' element={<ChangePasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
