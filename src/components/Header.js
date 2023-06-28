import { NavLink } from 'react-router-dom';

const Header = () => {



    return (
        <div className='container-fluid header'>
            <div className='container'>
                <div className='header-item'>
                    <div className='header-item-left'>
                        <NavLink to={'/'}><img style={{height:'56px'}} src='https://admin.googleusercontent.com/logo-scs-key2294502' alt='#' /></NavLink>
                        <NavLink to={'/'} className={({ isActive }) => isActive ? "active-header" : ""}>HOME    </NavLink>
                        <NavLink to={'/aboutus'} style={{paddingLeft:'30px'}} className={({ isActive }) => isActive ? "active-header" : ""}>About us    </NavLink>
                        <NavLink to={'/contact'} style={{paddingLeft:'30px'}} className={({ isActive }) => isActive ? "active-header" : ""}>Contact    </NavLink>
                    </div>

                    <div className='header-item-right'>
                        <NavLink to={'/login'} className={({ isActive }) => isActive ? "active-header" : ""}>Login    </NavLink>
                        <NavLink to={'/signup'} style={{paddingLeft:'20px'}} className={({ isActive }) => isActive ? "active-header" : ""}>Sign up    </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
