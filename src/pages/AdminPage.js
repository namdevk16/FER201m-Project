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
    }, [])

    useEffect(() => {
        fetch(`http://localhost:9999/account?role_id=3`)
            .then(res => res.json())
            .then(data => setHosts(data))
    }, [])

    const handleLogout = (e) => {
        e.preventDefault()
        sessionStorage.removeItem('account');
        navigate('/');
    }


    const handleData = (id, index) => {
        if (confirms[index]) {
            const data = {
                category_id: confirms[index].category_id,
                host_id: confirms[index].host_id,
                name: confirms[index].name,
                contact: confirms[index].contact,
                price: confirms[index].price,
                description: confirms[index].description,
                address_id: confirms[index].address_id,
                address: confirms[index].address,
                thumb: confirms[index].thumb,
                area: confirms[index].area,
                is_post: !confirms[index].is_post
            }
            const option = {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(data)
            }
            fetch(`http://localhost:9999/posts/${id}`, option)
                .then(res => res.json())
                .then(data => {
                    if(data !== null) {
                        const newHouse = {
                            category_id: confirms[index].category_id,
                            host_id: confirms[index].host_id,
                            name: confirms[index].name,
                            contact: confirms[index].contact,
                            price: confirms[index].price,
                            description: confirms[index].description,
                            address_id: confirms[index].address_id,
                            address: confirms[index].address,
                            thumb: confirms[index].thumb,
                            area: confirms[index].area,
                        }
                        const createOption = {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json'
                                // 'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            body: JSON.stringify(newHouse)
                        }
                        fetch(`http://localhost:9999/houseInformation`, createOption) 
                            .then(res => res.json())
                            .then(() => {
                                alert('Confirm successfully!');
                                const newConfirms = [...confirms];
                                newConfirms.splice(index, 1);
                                setConfirms(newConfirms);
                            })
                    }
                })
        }
    }

    return (
        <div className='container-fluid'>
            <div className='container header-item'>
                <NavLink to={'/admin'}><img style={{ height: '56px' }} src='https://admin.googleusercontent.com/logo-scs-key2294502' alt='#' /></NavLink>
                <NavLink to={'/admin'}>Hello admin</NavLink>
                <Link onClick={(e) => handleLogout(e)}>Signout</Link>
            </div>

            <div className='container' style={{ marginTop: '110px' }}>
                {
                    confirms.map((confirm, index) =>
                        <div className='house-detail'>
                            <div className='house-detail-img'>
                                <img style={{ width: '100%' }} src={confirm.thumb} alt='#' />
                            </div>

                            <div className='house-detail-name'>
                                <h2 style={{ color: 'red' }}>{confirm.name}</h2>
                            </div>
                            <div className='house-detail-address'>
                                <i style={{ marginRight: '8px' }} class="fas fa-map-marker-alt"></i>
                                <span>{confirm.address}</span>
                            </div>
                            <div className='house-detail-price'>
                                <i style={{ marginRight: '8px' }} class="far fa-money-bill-alt"></i>
                                <span>{confirm.price}</span>
                            </div>
                            <div className='house-detail-description'>
                                <p style={{ fontSize: '20px', fontWeight: '700' }}>Thông tin mô tả</p>
                                {
                                    confirm.description && confirm.description.split('. ').map(des =>
                                        <p>{des}.</p>
                                    )
                                }
                            </div>
                            <button className='btn btn-primary' onClick={() => {handleData(confirm.id, index)}}>Confirm</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default AdminPage;