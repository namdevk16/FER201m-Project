import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Detail = () => {

    const { id } = useParams();
    const [house, setHouse] = useState({});
    const [hosts, setHosts] = useState([]);
    const [relateHouses, setRelateHouses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9999/houseInformation/${id}`)
            .then(res => res.json())
            .then(data => setHouse(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:9999/account?role_id=3`)
            .then(res => res.json())
            .then(data => setHosts(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:9999/houseInformation`)
            .then(res => res.json())
            .then(data => setRelateHouses(data))
    }, [])


    return (
        <div className='container detail'>
            <div className='house-detail'>
                <div className='house-detail-img'>
                    <img style={{ width: '100%' }} src={house.thumb} alt='#' />
                </div>

                <div className='house-detail-name'>
                    <h2 style={{ color: 'red' }}>{house.name}</h2>
                </div>
                <div className='house-detail-address'>
                    <i style={{marginRight:'8px'}} class="fas fa-map-marker-alt"></i>
                    <span>{house.address}</span>
                </div>
                <div className='house-detail-price'>
                    <i style={{marginRight:'8px'}} class="far fa-money-bill-alt"></i>
                    <span>{house.price}</span>
                </div>
                <div className='house-detail-description'>
                    <p style={{ fontSize: '20px', fontWeight: '700' }}>Thông tin mô tả</p>
                    {
                        house.description && house.description.split('. ').map(des =>
                                <p>{des}.</p>
                            )
                    }
                </div>
            </div>



            <div className='infor-host'>
                {
                    hosts.filter(host =>
                        host.id === house.host_id
                    ).map(hostdetail =>
                        <div style={{ marginTop: '50px' }}>
                            <div className='infor-host-item'>
                                <img src={hostdetail.avatar} alt='#' />
                            </div>
                            <div className='infor-host-item'>
                                <p>{hostdetail.fullname}</p>
                            </div>
                            <div className='infor-host-item infor-host-item-phone'>
                                <i className="fas fa-phone-square-alt"></i>
                                <span>{hostdetail.phone}</span>
                            </div>
                            <div className='infor-host-item'>
                                <i className="far fa-envelope"></i>
                                <span>{hostdetail.email}</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Detail;