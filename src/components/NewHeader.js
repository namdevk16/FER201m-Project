import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/custom.css'

const NewHeader = () => {

    const navigate = useNavigate();

    const [quantity, setQuantity] = useState();

    useEffect(() => {
        if (sessionStorage.getItem('account') == null) {
            setQuantity(0)
        } else {
            fetch(`http://localhost:9999/posts?host_id=${JSON.parse(sessionStorage.getItem('account')).id}&is_post=false`)
                .then(res => res.json())
                .then(data => setQuantity(data.length))
        }
    }, [sessionStorage.getItem('account')])

    const handleLogout = () => {
        sessionStorage.removeItem('account');
        navigate('/');
    }

    const handleCheckLogin = (e) => {
        e.preventDefault();
        if (!sessionStorage.getItem('account')) {
            navigate('/login');
        } else {
            if (JSON.parse(sessionStorage.getItem('account')).role_id !== 3) {
                alert('Bạn không có quyền truy cập');
            } else {
                navigate('/post');
            }
        }
    }



    const mistype = {
        marginLeft: "0",
        width: "100%",
        background: "#5c7ce3"
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={mistype}>
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img style={{ height: '56px' }} src='https://admin.googleusercontent.com/logo-scs-key2294502' alt='#' />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ justifyContent: 'end' }}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                Trang chủ
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/aboutus">
                                Giới thiệu
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white position-relative"
                                id="notifications" href="/post" onClick={(e) => handleCheckLogin(e)}>
                                Bài đăng
                                <span className="badge bg-warning">4</span>
                            </a>
                        </li>
                        {
                            !sessionStorage.getItem('account') ?
                                <li className="nav-item">
                                    <a className="nav-link" href="/signup">
                                        Đăng ký
                                    </a>
                                </li> :
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
                                        <i class="bi bi-bell-fill"></i>
                                        <span className="badge bg-warning">4</span>
                                    </Link>
                                    <ul
                                        className="dropdown-menu dropdown-menu-end mt-sm-3 shadow-sm"
                                        aria-labelledby="notifications">
                                        <li>
                                            <Link className="dropdown-item py-3" to={'#'}>
                                                <div className="d-flex">
                                                    <div className="icon icon-sm bg-blue">
                                                        SOS
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="h6 d-block fw-normal mb-1 text-xs text-gray-600">
                                                            Bạn có thông báo nè!
                                                        </span>
                                                        <small className="small text-gray-600">
                                                            5 phút trước
                                                        </small>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item py-3" to={'#'}>
                                                <div className="d-flex">
                                                    <div className="icon icon-sm bg-green">
                                                        SOS
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="h6 d-block fw-normal mb-1 text-xs text-gray-600">
                                                            Bạn có thông báo nè!
                                                        </span>
                                                        <small className="small text-gray-600">
                                                            5 phút trước
                                                        </small>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item py-3" to={'#'}>
                                                <div className="d-flex">
                                                    <div className="icon icon-sm bg-oragne">
                                                        SOS
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="h6 d-block fw-normal mb-1 text-xs text-gray-600">
                                                            Bạn có thông báo nè!
                                                        </span>
                                                        <small className="small text-gray-600">
                                                            5 phút trước
                                                        </small>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item py-3" to={'#'}>
                                                <div className="d-flex">
                                                    <div className="icon icon-sm bg-blue">
                                                        SOS
                                                    </div>
                                                    <div className="ms-3">
                                                        <span className="h6 d-block fw-normal mb-1 text-xs text-gray-600">
                                                            Bạn có thông báo nè!
                                                        </span>
                                                        <small className="small text-gray-600">
                                                            5 phút trước
                                                        </small>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                        }
                        
                        {!sessionStorage.getItem('account') ?
                            <li className="nav-item">
                                <a className="nav-link" href="/login">
                                    Đăng nhập
                                </a>
                            </li> :
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
                                    <div className='avatar-popup'>
                                        <img src={JSON.parse(sessionStorage.getItem('account')).avatar}  alt='#'
                                            onError={({ currentTarget }) => {
                                                currentTarget.onerror = null; // prevents looping
                                                currentTarget.src = "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg";
                                            }}
                                        />
                                    </div>
                                </Link>
                                <ul
                                    className="dropdown-menu dropdown-menu-end mt-sm-3 shadow-sm"
                                    aria-labelledby="notifications">
                                    <li>
                                        <Link className="dropdown-item py-3" to={'/profile'}>
                                            <div className="d-flex">
                                                <div className="ms-3">
                                                    Trang cá nhân
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item py-3" to={'/houseofhost'}>
                                            <div className="d-flex">
                                                <div className="ms-3">
                                                    Nhà của bạn
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item py-3" to={'/changepassword'}>
                                            <div className="d-flex">
                                                <div className="ms-3">
                                                    Thay đổi mật khẩu
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item py-3" to={'#'}>
                                            <div className="d-flex">
                                                <div className="ms-3">
                                                    Đăng xuất
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
};
export default NewHeader;