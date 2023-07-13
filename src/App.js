import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AboutUsPage from './pages/AboutUsPage';
import PostPage from './pages/PostPage';
import AdminPage from './pages/AdminPage';
import HouseOfHostPage from './pages/HouseOfHostPage'


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
        <Route path='/post' element={<PostPage />}></Route>
        <Route path='/admin' element={<AdminPage />}></Route>
        <Route path='/houseofhost' element={<HouseOfHostPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
