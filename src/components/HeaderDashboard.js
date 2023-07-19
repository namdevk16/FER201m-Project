import { Link, NavLink, useNavigate } from "react-router-dom";

const HeaderDashboard = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('account');
        navigate('/');
    }


    return (
        <div className='row' style={{ height: '68px' }}>
            <header className="headermb-2">
                <nav className="nav navbar fixed-top">
                    <div className="container-fluid">
                        <div className="d-flex align-items-center justify-content-between w-100">
                            <div className="d-flex align-items-center">

                                <NavLink className="navbar-brand ms-2" to={'#'}>
                                    <div className="brand-text d-none d-md-inline-block text-uppercase letter-spacing-0">
                                        <span className="text-white fw-normal text-xs">
                                            Homedy &nbsp;
                                        </span>
                                        <strong className="text-primary text-sm">Dashboard</strong>
                                    </div>
                                </NavLink>
                            </div>
                            <ul className="nav-menu mb-0 list-unstyled d-flex flex-md-row align-items-md-center">
                                <li className="nav-item">
                                    <button
                                        className="nav-link text-white text-sm ps-0"
                                        onClick={handleLogout}
                                    >
                                        {" "}
                                        <span className="d-none d-sm-inline-block">Logout</span>
                                        <svg className="svg-icon svg-icon-xs svg-icon-heavy">
                                            <use xlinkHref="#security-1"> </use>
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default HeaderDashboard;