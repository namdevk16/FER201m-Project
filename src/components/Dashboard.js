import { Link, NavLink } from 'react-router-dom';
import '../styles/custom.css'
import SideBar from './SideBar';
import HeaderDashboard from './HeaderDashboard';
import { useEffect, useState } from 'react';
const Dashboard = () => {
    const [userCount, setUserCount] = useState(0);
    const [dormCount, setDormCount] = useState(0);
    const [hotelCount, setHotelCount] = useState(0);
    const [houseCount, setHouseCount] = useState(0);
    const [vertifyCount, setVertifyCount] = useState(0);

    useEffect(() => {
        const fetchUserCount = async () => {
            try {
                const response = await fetch('http://localhost:9999/account');
                const data = await response.json();
                const filteredUsers = data.filter(user => user.role_id !== 1);
                setUserCount(filteredUsers.length);
            } catch (error) {
                console.error('Error fetching user count:', error);
            }
        };

        fetchUserCount();
    }, []);

    useEffect(() => {
        const fetchUserCount = async () => {
            try {
                const response = await fetch('http://localhost:9999/houseInformation');
                const data = await response.json();
                let dormCounter = 0;
                let houseCounter = 0;
                let hotelCounter = 0;
        
                data.forEach(ho => {
                  if (ho.category_id === 1) {
                    dormCounter++;
                  } else if (ho.category_id === 2) {
                    houseCounter++;
                  } else if (ho.category_id === 3) {
                    hotelCounter++;
                  } 
                });
        
                setDormCount(dormCounter);
                setHotelCount(houseCounter);
                setHouseCount(hotelCounter);
            } catch (error) {
                console.error('Error fetching user count:', error);
            }
        };

        fetchUserCount();
    }, []);

    useEffect(() => {
        const fetchUserCount = async () => {
            try {
                const response = await fetch('http://localhost:9999/posts');
                const data = await response.json();
                const filteredVertify = data.filter(p => p.is_post !== true);
                setVertifyCount(filteredVertify.length);
            } catch (error) {
                console.error('Error fetching user count:', error);
            }
        };

        fetchUserCount();
    }, []);

    return (
        <>
            <SideBar />
            <div className="page">
                {/* navbar*/}
                <HeaderDashboard />

                {/* BLOCK */}
                <div className="row align-items-stretch gy-4 py-5" style={{ padding: '0 3rem' }}>
                    <div className="col-lg-4">
                        {/* <!-- Income--> */}
                        <div className="card text-center h-100 mb-0">
                            <div className="card-body">
                                <i class="bi bi-person-check-fill"></i>
                                <p className="text-gray-700 display-6">{userCount}</p>
                                <p className="text-success h2 fw-bold">Người Dùng</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        {/* <!-- Income--> */}
                        <div className="card text-center h-100 mb-0">
                            <div className="card-body">
                                <i class="bi bi-houses"></i>
                                <p className="text-gray-700 display-6">{dormCount}</p>
                                <p className="text-success h2 fw-bold">Dorm</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        {/* <!-- Income--> */}
                        <div className="card text-center h-100 mb-0">
                            <div className="card-body">
                                <i class="bi bi-house-lock"></i>
                                <p className="text-gray-700 display-6">{hotelCount}</p>
                                <p className="text-success h2 fw-bold">Hotel</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        {/* <!-- Income--> */}
                        <div className="card text-center h-100 mb-0">
                            <div className="card-body">
                                <i class="bi bi-house-check-fill"></i>
                                <p className="text-gray-700 display-6">{houseCount}</p>
                                <p className="text-success h2 fw-bold">House</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        {/* <!-- Income--> */}
                        <div className="card text-center h-100 mb-0">
                            <div className="card-body">
                                <i class="bi bi-check-circle"></i>
                                <p className="text-gray-700 display-6">{vertifyCount}</p>
                                <p className="text-success h2 fw-bold">Chưa Duyệt</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* chart */}
                <div className='row py-5' style={{ padding: '0 3rem' }}>
                    <div className="col-lg-12 col-md-12">
                        <div className="card shadow-0 chart-card">
                            <div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand">
                                <div className="">

                                </div>
                            </div>
                                <div className="chartjs-size-monitor-shrink"><div className="">

                                </div>
                                </div>
                            </div>
                            <h5 className="h5 fw-normal">Sales marketing report</h5>
                            <p className="text-sm text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor amet
                                officiis</p>
                            <canvas id="lineCahrt" style={{ display: 'block', height: '299px', width: '600px' }} width="750" height="373" className="chartjs-render-monitor"></canvas>
                        </div>
                    </div>
                </div>


                <footer
                    className="row main-footer w-100 position-absolute bottom-0 start-0 py-2"
                    style={{ background: "#222" }}>
                    <div className="container-fluid">
                        <div className="row text-center gy-3">
                            <div className="col-sm-6 text-sm-start">
                                <p className="mb-0 text-sm text-gray-600">
                                    Your company © 2017-2022
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>

    )
};
export default Dashboard;