import { NavLink, Link, useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('account');
        navigate('/');
    }

    const handleCheckLogin = (e) => {
        e.preventDefault();
        if(!sessionStorage.getItem('account')) {
            navigate('/login');
        } else {
            navigate('/post');
        }
    }


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
                        {!sessionStorage.getItem('account') ? <NavLink to={'/login'} style={{paddingLeft:'30px'}} className={({isActive}) => isActive ? "active-header" : ""}>Login</NavLink> : <NavLink to={'/login'} className={({isActive}) => isActive ? "active-header" : ""}>{JSON.parse(sessionStorage.getItem('account')).fullname}</NavLink>}
                        {!sessionStorage.getItem('account') ? <NavLink to={'/signup'} style={{paddingLeft:'30px'}} className={({isActive}) => isActive ? "active-header" : ""}>Sigup</NavLink> : <Link onClick={handleLogout} className={({isActive}) => isActive ? "active-header" : ""}>Signout</Link>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
