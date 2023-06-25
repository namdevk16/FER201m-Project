import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/house/detail/:id' element={<DetailPage />} />
        <Route path='/changepassword' element={<ChangePasswordPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
