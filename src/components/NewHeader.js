import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../styles/custom.css'

const NewHeader = () => {


    const [notifications, setNotifications] = useState([]);
    const [numberNotifi, setnumberNotifi] = useState(0);
    const [quantity, setQuantity] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem('account') !== null) {
            fetch(`http://localhost:9999/notifications?user_id=${JSON.parse(sessionStorage.getItem('account')).id}`)
                .then(res => res.json())
                .then(data => {
                    setNotifications(data.reverse());
                    setnumberNotifi(data.length);
                })
        }
    }, [])



    useEffect(() => {
        if (sessionStorage.getItem('account') == null) {
            setQuantity(0)
        } else {
            fetch(`http://localhost:9999/posts?host_id=${JSON.parse(sessionStorage.getItem('account')).id}&is_post=false`)
                .then(res => res.json())
                .then(data => setQuantity(data.length))
        }
    }, [])

    const handleLogout = (e) => {
        e.preventDefault();
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

    const handleNumberNotifi = (e) => {
        e.preventDefault();
        setnumberNotifi(0)
    }



    const mistype = {
        marginLeft: "0",
        width: "100%",
        background: "#056dbb"
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={mistype}>
            <div className="container">
                <Link className="navbar-brand" to={"/"}>
                    <img style={{ height: '56px' }} src='https://admin.googleusercontent.com/logo-scs-key2294502' alt='#' />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ justifyContent: 'end' }}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/"}>
                                Trang chủ
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/aboutus"}>
                                Giới thiệu
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white position-relative"
                                id="notifications" to={"/post"} onClick={(e) => handleCheckLogin(e)}>
                                Bài đăng
                                <span className="badge bg-warning">{sessionStorage.getItem('account') === null ? '' : quantity}</span>
                            </Link>
                        </li>
                        {
                            !sessionStorage.getItem('account') ?
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/signup"}>
                                        Đăng ký
                                    </Link>
                                </li> :
                                <li className="nav-item dropdown">
                                    {" "}
                                    <Link
                                        onClick={e => handleNumberNotifi(e)}
                                        className="nav-link text-white position-relative"
                                        id="notifications"
                                        rel="nofollow"
                                        data-bs-target="#"
                                        to={'#'}
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        <i class="bi bi-bell-fill"></i>
                                        <span className="badge bg-warning">{numberNotifi !== 0 ? numberNotifi : ''}</span>
                                    </Link>
                                    <ul
                                        className="dropdown-menu dropdown-menu-end mt-sm-3 shadow-sm"
                                        aria-labelledby="notifications">
                                        {
                                            notifications && notifications.map(notification =>
                                                <li>
                                                    <Link className="dropdown-item py-3" to={'#'}>
                                                        <div className="d-flex">
                                                            <div className="icon icon-sm bg-blue">
                                                                Tada
                                                            </div>
                                                            <div className="ms-3">
                                                                <span className="h6 d-block fw-normal mb-1 text-xs text-gray-600">
                                                                    {notification.content}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </li>
                        }

                        {!sessionStorage.getItem('account') ?
                            <li className="nav-item">
                                <Link className="nav-link" to={"/login"}>
                                    Đăng nhập
                                </Link>
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
                                        <img src={JSON.parse(sessionStorage.getItem('account')).avatar} alt='#'
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
                                                    {JSON.parse(sessionStorage.getItem('account')).fullname}
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
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
                                        <NavLink className="dropdown-item py-3" onClick={e => handleLogout(e)}>
                                            <div className="d-flex">
                                                <div className="ms-3">
                                                    Đăng xuất
                                                </div>
                                            </div>
                                        </NavLink>
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
