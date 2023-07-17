import { Link, NavLink } from 'react-router-dom';
import '../styles/custom.css'
import SideBar from './SideBar';
import HeaderDashboard from './HeaderDashboard';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
const Dashboard = () => {
    const [userCount, setUserCount] = useState(0);
    const [dormCount, setDormCount] = useState(0);
    const [hotelCount, setHotelCount] = useState(0);
    const [houseCount, setHouseCount] = useState(0);
    const [vertifyCount, setVertifyCount] = useState(0);
    const [regions, setRegions] = useState([]);
    const [houses, setHouses] = useState([]);
    const [quantity, setQuantity] = useState([])
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


    useEffect(() => {
        const fetchRegion = async () => {
            try {
                const response = await fetch('http://localhost:9999/region');
                const data = await response.json();
                setRegions(data);
            } catch (error) {
                console.error('Error fetching user count:', error);
            }
        };

        fetchRegion();
    }, []);

    // useEffect(() => {
    //     Promise.all([
    //         fetch(`http://localhost:9999/houseInformation`),
    //         fetch(`http://localhost:9999/region`)
    //     ])
    //         .then(res => res.json())
    //         .then((data) => {
    //             const house = data[0];
    //             const re = data[1];
    //             let arr = []
    //             for (var i = 0; i < house.length; i++) {
    //                 let count = 0;
    //                 for (var j = 0; j < re.length; j++) {
    //                     if (house[j].address_id === re[i].id) {
    //                         count++;
    //                     }
    //                 }
    //                 arr.push({
    //                     reg_id: re[i].id,
    //                     count: count
    //                 })
    //             }
    //             setQuantity(arr)
    //         })
    //         .catch(err => {
    //             console.log(err.message);
    //         });
    // }, [])

    // console.log(quantity);


    const options = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: ['Thị trấn Liên Quan','Xã Bình Phú','Xã Bình Yên','Xã Cẩm Yên','Xã Cần Kiệm','Xã Canh Nậu',
                         'Xã Chàng Sơn','Xã Đại Đồng','Xã Dị Nậu','Xã Đồng Trúc','Xã Hạ Bằng','Xã Hương Ngải','Xã Hữu Bằng','Xã Kim Quan',
                         'Xã Lại Thượng','Xã Phú Kim','Xã Phùng Xá','Xã Tân Xã','Xã Thạch Hoà','Xã Thạch Xá','Xã Tiến Xuân','Xã Yên Bình','Xã Yên Trung']
            // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
    };

    const series = [
        {
            name: "series-1",
            data: [0,0,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,2,14,0,0,0,0]
            // data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ];

    useEffect(() => {
        console.log("Handle quantity:");
        console.log(quantity);
        console.log(regions);
        console.log(houses);
        let arr = []
        for (var i = 0; i < regions.length; i++) {
            let count = 0;
            for (var j = 0; j < houses.length; j++) {
                if (houses[j].address_id === regions[i].id) {
                    count++;
                }
            }
            arr.push({
                reg_id: regions[i].id,
                count: count
            })
        }
        setQuantity(arr)
    }, [])

    // console.log(quantity);
    // console.log(regions);
    // console.log(houses);
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
                            <h5 className="h5 fw-normal">Thống Kê Các Xã</h5>
                            <p className="text-sm text-muted">Bao gồm 23 xã trong khu vực Sơn Tây</p>
                            <Chart options={options} series={series} type="bar" width="100%" />
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