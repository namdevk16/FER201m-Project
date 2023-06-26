import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AboutUsPage from './pages/AboutUsPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/house/detail/:id' element={<DetailPage />} />
        <Route path='/changepassword' element={<ChangePasswordPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/aboutus' element={<AboutUsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
