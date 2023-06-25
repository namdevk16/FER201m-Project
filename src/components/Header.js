import { NavLink } from 'react-router-dom';

const Header = () => {



    return (
        <div className='container-fluid header'>
            <div className='container'>
                <div className='header-item'>
                    <div>
                        <NavLink to={'/'}><img style={{height:'56px'}} src='https://admin.googleusercontent.com/logo-scs-key2294502' alt='#' /></NavLink>
                    </div>

                    <div>
                        <NavLink to={'/'} className={({ isActive }) => isActive ? "active-header" : ""}>HOME</NavLink>
                    </div>

                    <div>
                        <NavLink to={'/about'} className={({ isActive }) => isActive ? "active-header" : ""}>About us</NavLink>
                    </div>

                    <div>
                        <NavLink to={'/contact'} className={({ isActive }) => isActive ? "active-header" : ""}>Contact</NavLink>
                    </div>

                    <div>
                        <NavLink to={'/login'} className={({ isActive }) => isActive ? "active-header" : ""}>Login</NavLink>
                    </div>

                    <div>
                        <NavLink to={'/signup'} className={({ isActive }) => isActive ? "active-header" : ""}>Sign up</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
