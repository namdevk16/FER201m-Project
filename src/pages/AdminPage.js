import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const AdminPage = () => {

    const [confirms, setConfirms] = useState([]);
    const [hosts, setHosts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:9999/posts?is_post=false`)
            .then(res => res.json())
            .then(data => setConfirms(data))
    },[])

    useEffect(() => {
        fetch(`http://localhost:9999/account?role_id=3`)
            .then(res => res.json())
            .then(data => setHosts(data))
    },[])

    const handleLogout = (e) => {
        e.preventDefault()
        sessionStorage.removeItem('account');
        navigate('/');
    }

    return (
        <div className='container-fluid'>
            <div className='container header-item'>
                <NavLink to={'/admin'}><img style={{ height: '56px' }} src='https://admin.googleusercontent.com/logo-scs-key2294502' alt='#' /></NavLink>
                <NavLink to={'/admin'}>Hello admin</NavLink>
                <Link onClick={(e) => handleLogout(e)}>Signout</Link>
            </div>

            <div className='container' style={{marginTop:'110px'}}>
                {
                    confirms.map(confirm =>
                        <div className='house-detail'>
                            <div className='house-detail-img'>
                                <img style={{ width: '100%' }} src={confirm.thumb} alt='#' />
                            </div>

                            <div className='house-detail-name'>
                                <h2 style={{ color: 'red' }}>{confirm.name}</h2>
                            </div>
                            <div className='house-detail-address'>
                                <i class="fas fa-map-marker-alt"></i>
                                <span>{confirm.address}</span>
                            </div>
                            <div className='house-detail-price'>
                                <i class="far fa-money-bill-alt"></i>
                                <span>{confirm.price}</span>
                            </div>
                            <div className='house-detail-description'>
                                <p style={{ fontSize: '20px', fontWeight: '700' }}>Thông tin mô tả</p>
                                {
                                    confirm.description && confirm.description.split('.').map(des =>
                                        <p>{des}.</p>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default AdminPage;