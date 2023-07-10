import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'


const Header = () => {
    const navigate = useNavigate();

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
                        <Nav.Link as={NavLink} to={'/post'} onClick={(e) => handleCheckLogin(e)}>Post</Nav.Link>
                        {
                            !sessionStorage.getItem('account') ? <Nav.Link as={NavLink} to={'/login'}>Login</Nav.Link> :
                                <NavDropdown title={JSON.parse(sessionStorage.getItem('account')).fullname} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.2">Trang cá nhân</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to={'/changepassword'}>Thay đổi mật khẩu</NavDropdown.Item>
                                </NavDropdown>
                        }
                        {!sessionStorage.getItem('account') ? <Nav.Link as={NavLink} to={'/signup'}>Sigup</Nav.Link> : <Nav.Link onClick={handleLogout}>Logout</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
