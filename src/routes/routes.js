import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import ChangePasswordPage from '../pages/ChangePasswordPage';
import DetailPage from '../pages/DetailPage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import AboutUsPage from '../pages/AboutUsPage';
import PostPage from '../pages/PostPage';
import AdminPage from '../pages/AdminPage';
import HouseOfHostPage from '../pages/HouseOfHostPage'
import EditPostPage from '../pages/EditPostPage';
import EditHousePage from '../pages/EditHousePage';
import ProfilePage from '../pages/ProfilePage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';


const ListRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/house/detail/:id' element={<DetailPage />} />
            <Route path='/changepassword' element={<ChangePasswordPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/aboutus' element={<AboutUsPage />} />
            <Route path='/post' element={<PostPage />}></Route>
            <Route path='/post/edit/:id' element={<EditPostPage />}></Route>
            <Route path='/house/edit/:id' element={<EditHousePage />}></Route>
            <Route path='/admin' element={<AdminPage />}></Route>
            <Route path='/houseofhost' element={<HouseOfHostPage />}></Route>
            <Route path='/profile' element={<ProfilePage />}></Route>
            <Route path='/forgotpassword' element={<ForgotPasswordPage />}></Route>
            <Route path='/resetpassword/:email' element={<ResetPasswordPage />}></Route>
        </Routes>
    );
}

export default ListRoutes;
