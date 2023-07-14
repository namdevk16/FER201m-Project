import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'


const Header = () => {

    const navigate = useNavigate();

    const [quantity, setQuantity] = useState();

    useEffect(() => {
        if(sessionStorage.getItem('account') == null) {
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


    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand><NavLink to={'/'}><img style={{ height: '56px' }} src='https://admin.googleusercontent.com/logo-scs-key2294502' alt='#' /></NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to={'/'}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to={'/aboutus'}>About us</Nav.Link>
                        <Nav.Link className='header-post' as={NavLink} to={'/post'} onClick={(e) => handleCheckLogin(e)}>
                            <span className='header-post-span'>
                                Post
                                <span className='header-quantity'>{quantity}</span>
                            </span>
                            
                        </Nav.Link>
                        {
                            !sessionStorage.getItem('account') ? <Nav.Link as={NavLink} to={'/login'}>Login</Nav.Link> :
                            <div className='header-dropdown'>
                                <img style={{width:'30px', height:'30px', borderRadius:'50%'}} src={JSON.parse(sessionStorage.getItem('account')).avatar} alt='#'/>
                                <NavDropdown title={JSON.parse(sessionStorage.getItem('account')).fullname} id="basic-nav-dropdown">
                                    <NavDropdown.Item as={NavLink} to={`/profile`}>Trang cá nhân</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to={'/houseofhost'}>Nhà của bạn</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to={'/changepassword'}>Thay đổi mật khẩu</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        }
                        {!sessionStorage.getItem('account') ? <Nav.Link as={NavLink} to={'/signup'}>Sigup</Nav.Link> : <Nav.Link onClick={handleLogout}>Logout</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
