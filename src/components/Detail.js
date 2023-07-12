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
            <img src={house.thumb} alt='#' />
            <div className='detail-content'>
                <div className='detail-title'>
                    <p className='title-text'>{house.name}</p>
                </div>
                <div className='detail-address'>
                    <i class="fas fa-map-marker-alt"></i>
                    <span>{house.address}</span>
                </div>
                <div className='row' style={{ marginTop: '50px' }}>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <div className='detail-houseinfor infor'>
                            <i class="fas fa-home"></i>
                            <span className='title'>Thông tin phòng</span>
                            <div style={{ marginTop: '12px' }}>
                                {
                                    house.description && house.description.split('. ').map(des =>
                                        <p>{des}.</p>
                                    )
                                }
                            </div>
                        </div>

                        <div className='note'>
                            <div className='note-title infor'>
                                <i class="fas fa-exclamation"></i>
                                <span className='title'>Lưu ý</span>
                                <h5 style={{ marginTop: '20px' }}>Sức chứa</h5>
                                <div className='capacity'>
                                    <div className='capacity-content large'>
                                        <div className='capacity-text'>Rộng</div>
                                        <div className='capacity-number capacity-number-large'><span>1 người</span></div>
                                    </div>
                                    <div className='capacity-content medium'>
                                    <div className='capacity-text'>Vừa</div>
                                        <div className='capacity-number capacity-number-medium'><span>2 người</span></div>
                                    </div>
                                    <div className='capacity-content smalll'>
                                        <div className='capacity-text'>Rộng</div>
                                        <div className='capacity-number capacity-number-small'><span>3 người+</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <div className='detail-hostinfor infor'>
                            <i class="fas fa-user"></i>
                            <span className='title'>Thông tin chủ phòng</span>
                            {
                                hosts.filter(host =>
                                    host.id === house.host_id
                                ).map(hostdetail =>
                                    <div style={{ marginTop: '12px' }}>
                                        <div style={{ marginBottom: '12px' }} className='infor-host-item'>
                                            <img src={hostdetail.avatar} alt='#' />
                                        </div>
                                        <div className='infor-host-item'>
                                            <span>{hostdetail.fullname}</span>
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
                </div>
            </div>
        </div>

    );
}

export default Detail;