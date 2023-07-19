import SideBar from './SideBar';
import HeaderDashboard from './HeaderDashboard';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/custom.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListHouseDashboard = () => {

    const [confirms, setConfirms] = useState([]);
    const [check, setCheck] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:9999/posts?is_post=false`)
            .then(res => res.json())
            .then(data => setConfirms(data))
    }, [check])

    // useEffect(() => {
    //     fetch(`http://localhost:9999/account?role_id=3`)
    //         .then(res => res.json())
    //         .then(data => setHosts(data))
    // }, [])


    const handleDelete = (id, index) => {
        if (window.confirm("Do you want to remove")) {
            const option = {
                method: "DELETE",
            }
            fetch(`http://localhost:9999/posts/${id}`, option)
                .then(() => {
                    toast.success("Delete success.");
                    const notifi = {
                        user_id: confirms[index].host_id,
                        content: `Yêu cầu duyệt ${confirms[index].name} của bạn đã bị từ chối vì vi phạm quy tắc cộng đồng!`
                    }
                    localStorage.setItem(`${id}`, JSON.stringify(notifi));
                    const createNotifi = {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify(notifi)
                    }
                    fetch('http://localhost:9999/notifications', createNotifi)
                        .then(res => res.json())
                        .then(() => {
                            setCheck(!check);
                        })
                }
                )
        }
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
                    if (data !== null) {
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
                                toast.success("Cofirm success.");
                                const notifi = {
                                    user_id: confirms[index].host_id,
                                    content: `Yêu cầu duyệt ${confirms[index].name} của bạn đã được phê duyệt!`
                                }
                                localStorage.setItem(`${id}`, JSON.stringify(notifi));
                                const createNotifi = {
                                    method: "POST",
                                    headers: {
                                        'Content-Type': 'application/json'
                                        // 'Content-Type': 'application/x-www-form-urlencoded',
                                    },
                                    body: JSON.stringify(notifi)
                                }
                                fetch('http://localhost:9999/notifications', createNotifi)
                                    .then(res => res.json())
                                    .then((check => {
                                        setCheck(!check)
                                    }))
                            })
                    }
                })
        }
    }

    return (
        <>
            <SideBar />
            {/* navbar*/}
            <div className='page'>
                <HeaderDashboard />
                <div className='row breadcrumbbb' style={{ padding: '0 3rem' }}>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 py-3">
                            <li className="breadcrumb-item"><Link to={''}>Bảng kiểm duyệt</Link></li>
                            <li className="breadcrumb-item active fw-light" aria-current="page">Kiểm duyệt</li>
                        </ol>
                    </nav>
                </div>
                <div className='row py-5' style={{ padding: '0 2rem' }}>
                    <div className='col-lg-6 pb-3'>
                        {
                            confirms.length > 0 ? (
                                confirms.map((confirm, index) =>
                                    <div className='item_house' key={index}>
                                        <div className='row house-detail'>
                                            <div className=' col-lg-5 house-detail-img'>
                                                <img src={confirm.thumb} alt='#' />
                                            </div>
                                            <div className='col-lg-7'>
                                                <div className='house-detail-name'>
                                                    <h2 style={{ color: 'red' }}>{confirm.name}</h2>
                                                </div>
                                                <div className='house-detail-address'>
                                                    <i style={{ marginRight: '8px' }} className="fas fa-map-marker-alt"></i>
                                                    <span>{confirm.address}</span>
                                                </div>
                                                <div className='house-detail-price'>
                                                    <i style={{ marginRight: '8px' }} className="far fa-money-bill-alt"></i>
                                                    <span>{confirm.price}</span>
                                                </div>
                                                <div className='house-detail-description'>
                                                    <p style={{ fontSize: '20px', fontWeight: '700' }}>Thông tin mô tả</p>
                                                    <p>
                                                        {
                                                            confirm.description && confirm.description.split('. ').map((des, index) =>
                                                                <p key={index}>{des}.</p>
                                                            )
                                                        }
                                                    </p>
                                                </div>
                                                <button className='btn btn-success' onClick={() => { handleData(confirm.id, index) }}>Xác nhận</button>
                                                <button className='btn btn-danger' style={{ float: 'right' }} onClick={() => handleDelete(confirm.id, index)}>Từ Chối</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ) : (
                                <div className="section" style={{textAlign:'center'}}>
                                    <h1 className="error">404</h1>
                                    <div className="pagee">Bạn Ơi! Hiện không có bài đăng nào đâu nha</div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListHouseDashboard;
