import { Link } from "react-router-dom";
import avatar from '../images/abv.png'

const SideBar = () => {
    return (
        <nav className="side-navbar">
            <div className="side-navbar-inner">
                {/* Sidebar Header    */}
                <div className="sidebar-header d-flex align-items-center justify-content-center p-3 mb-3">
                    {/* User Info*/}
                    <div className="sidenav-header-inner text-center">
                        <img
                            className="img-fluid rounded-circle avatar mb-3"
                            src={avatar}
                            alt="person"
                        />
                        <h2 className="h5 text-white text-uppercase mb-0">Hello, admin</h2>
                        <p className="text-sm mb-0 text-muted">Web Developer</p>
                    </div>
                </div>
                {/* Sidebar Navigation Menus*/}
                <span className="text-uppercase text-gray-500 text-sm fw-bold letter-spacing-0 mx-lg-2 heading">
                   Nội Dung
                </span>
                <ul className="list-unstyled">
                    <li className="sidebar-item">
                        <Link to={'/admin'} className="sidebar-link">
                        <i class="bi bi-speedometer"></i> &nbsp; Bảng điều khiển
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to={'/manageuser'} className="sidebar-link">
                        <i class="bi bi-people"></i> &nbsp; Người dùng
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to={'/managehouse'} className="sidebar-link">
                            <i className="bi bi-2-circle"></i> &nbsp; Kiểm duyệt 
                        </Link>
                    </li>
                    {/* <li className="sidebar-item">

                        <Link to={'#exampledropdownDropdown'} className="sidebar-link" data-bs-toggle="collapse">
                            &nbsp; Example dropdown{" "}
                        </Link>
                        <ul className="collapse list-unstyled " id="exampledropdownDropdown">
                            <li>
                                <Link to={'#'} className="sidebar-link">
                                    &nbsp;  Null
                                </Link>
                            </li>
                            <li>
                                <Link to={'#'} className="sidebar-link">
                                    &nbsp;  Null
                                </Link>
                            </li>
                            <li>
                                <Link to={'#'} className="sidebar-link">
                                    &nbsp; Null
                                </Link>
                            </li>
                        </ul>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
}

export default SideBar;