import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HouseOfHost = () => {

    const [houses, setHouses] = useState([]);
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9999/houseInformation?host_id=${JSON.parse(sessionStorage.getItem('account')).id}`)
            .then(res => res.json())
            .then(data => setHouses(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:9999/account')
            .then(res => res.json())
            .then(data => setAccounts(data))
    }, [])

    const handleDelete = (id) => {
        if (window.confirm("Do you want to remove")) {
            Promise.all([
                fetch(`http://localhost:9999/post/${id}`, {
                    method: "DELETE"
                }),
                fetch(`http://localhost:9999/houseInformation/${id}`, {
                    method: "DELETE"
                })
            ])
                .then(() => {
                    alert("Delete success.");
                    // Sau khi xóa thành công, cần cập nhật danh sách bài đăng
                    fetch(`http://localhost:9999/houseInformation?host_id=${JSON.parse(sessionStorage.getItem('account')).id}`)
                        .then(res => res.json())
                        .then(data => setHouses(data));
                })
                .catch(err => {
                    console.log(err.message);
                });
        }
    };


    return (
        <div className="container post">

            <div className='row'>
                {
                    houses.map(house =>
                        <div key={house.id} className='house-item col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                            <Link to={`/house/edit/${house.id}`}>
                                <div className='house-img'>
                                    <img style={{ width: "100%", height: "300px" }} src={house.thumb} alt='#' />
                                </div>
                                <div className='house-name'>{house.name}</div>
                                <div>
                                    <span>Liên hệ: </span>
                                    <span>
                                        {
                                            accounts.map(acc => acc.id === house.host_id ? acc.phone : '')
                                        }
                                    </span>
                                </div>
                            </Link>
                            <span style={{ float: "left" }}><button className="btn btn-success">Edit</button></span>
                            <span style={{ float: "right" }}><button className="btn btn-danger" onClick={(() => handleDelete(house.id))}>Delete</button></span>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default HouseOfHost;