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
                                {/* Notifications dropdown*/}
                                <li className="nav-item dropdown">
                                    {" "}
                                    <Link
                                        className="nav-link text-white position-relative"
                                        id="notifications"
                                        rel="nofollow"
                                        data-bs-target="#"
                                        to={'#'}
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        <i className="bi bi-bar-chart"></i>
                                        <span className="badge bg-warning">12</span>
                                    </Link>
                                    <ul
                                        className="dropdown-menu dropdown-menu-end mt-sm-3 shadow-sm"
                                        aria-labelledby="notifications">
                                        <li>
                                            <Link className="dropdown-item py-3" to={'#'}>
                                                <div className="d-flex">
                                                    <div className="icon icon-sm bg-blue">
                                                        SASA
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="h6 d-block fw-normal mb-1 text-xs text-gray-600">
                                                            You have 6 new messages{" "}
                                                        </span>
                                                        <small className="small text-gray-600">
                                                            4 minutes ago
                                                        </small>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item py-3" to={'#'}>
                                                <div className="d-flex">
                                                    <div className="icon icon-sm bg-green">
                                                        Ring
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="h6 d-block fw-normal mb-1 text-xs text-gray-600">
                                                            New 2 WhatsApp messages
                                                        </span>
                                                        <small className="small text-gray-600">
                                                            4 minutes ago
                                                        </small>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item py-3" to={'#'}>
                                                <div className="d-flex">
                                                    <div className="icon icon-sm bg-orange">
                                                        Ring
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="h6 d-block fw-normal mb-1 text-xs text-gray-600">
                                                            Server Rebooted
                                                        </span>
                                                        <small className="small text-gray-600">
                                                            8 minutes ago
                                                        </small>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item py-3" to={'#'}>
                                                <div className="d-flex">
                                                    <div className="icon icon-sm bg-green">
                                                        Ring
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="h6 d-block fw-normal mb-1 text-xs text-gray-600">
                                                            New 2 WhatsApp messages
                                                        </span>
                                                        <small className="small text-gray-600">
                                                            10 minutes ago
                                                        </small>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item all-notifications text-center"
                                                to={'#'}>
                                                {" "}
                                                <strong className="text-xs text-gray-600">
                                                    view all notifications{" "}
                                                </strong>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                {/* Messages dropdown*/}
                                <li className="nav-item dropdown">
                                    {" "}
                                    <Link
                                        className="nav-link text-white position-relative"
                                        id="messages"
                                        rel="nofollow"
                                        data-bs-target="#"
                                        to={'#'}
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        <i className="bi bi-envelope"></i>
                                        <span className="badge bg-info">10</span>
                                    </Link>
                                    <ul
                                        className="dropdown-menu dropdown-menu-end mt-sm-3 shadow-sm"
                                        aria-labelledby="messages"
                                    >
                                        <li>
                                            <Link className="dropdown-item d-flex py-3" to={'#'}>
                                                {" "}
                                                <img
                                                    className="img-fluid rounded-circle flex-shrink-0 avatar shadow-0"
                                                    src="https://th.bing.com/th/id/OIP.B3VYZ9tiEDzKOdTmjbtgnwHaJ8?pid=ImgDet&rs=1"
                                                    alt="..."
                                                    width={45}
                                                />
                                                <div className="ms-3">
                                                    <span className="h6 d-block fw-normal mb-1 text-sm text-gray-600">
                                                        Jason Doe
                                                    </span>
                                                    <small className="small text-gray-600">
                                                        {" "}
                                                        Sent You Message
                                                    </small>
                                                    <p className="mb-0 small text-gray-600">
                                                        3 days ago at 7:58 pm - 10.06.2014
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item d-flex py-3" to={'#'}>
                                                {" "}
                                                <img
                                                    className="img-fluid rounded-circle flex-shrink-0 avatar shadow-0"
                                                    src="https://th.bing.com/th/id/OIP.B3VYZ9tiEDzKOdTmjbtgnwHaJ8?pid=ImgDet&rs=1"
                                                    alt="..."
                                                    width={45}
                                                />
                                                <div className="ms-3">
                                                    <span className="h6 d-block fw-normal mb-1 text-sm text-gray-600">
                                                        Jason Doe
                                                    </span>
                                                    <small className="small text-gray-600">
                                                        {" "}
                                                        Sent You Message
                                                    </small>
                                                    <p className="mb-0 small text-gray-600">
                                                        3 days ago at 7:58 pm - 10.06.2014
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item d-flex py-3" to={'#'}>
                                                {" "}
                                                <img
                                                    className="img-fluid rounded-circle flex-shrink-0 avatar shadow-0"
                                                    src="https://th.bing.com/th/id/OIP.B3VYZ9tiEDzKOdTmjbtgnwHaJ8?pid=ImgDet&rs=1"
                                                    alt="..."
                                                    width={45}
                                                />
                                                <div className="ms-3">
                                                    <span className="h6 d-block fw-normal mb-1 text-sm text-gray-600">
                                                        Jason Doe
                                                    </span>
                                                    <small className="small text-gray-600">
                                                        {" "}
                                                        Sent You Message
                                                    </small>
                                                    <p className="mb-0 small text-gray-600">
                                                        3 days ago at 7:58 pm - 10.06.2014
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item text-center" to={'#'}>
                                                {" "}
                                                <strong className="text-xs text-gray-600">
                                                    Read all messages{" "}
                                                </strong>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                {/* Log out*/}
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