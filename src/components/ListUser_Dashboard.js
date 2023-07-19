import SideBar from './SideBar';
import HeaderDashboard from './HeaderDashboard';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const ListUserDashboard = () => {

    const [userList, setUserList] = useState([]);
    const [roleList, setRoleList] = useState([]);
    useEffect(() => {
        const fetchUserCount = async () => {
            try {
                const response = await fetch('http://localhost:9999/account');
                const data = await response.json();
                const filteredUsers = data.filter(user => user.role_id !== 1);
                setUserList(filteredUsers);
            } catch (error) {
                console.error('Error fetching user count:', error);
            }
        };

        fetchUserCount();
    }, []);

    useEffect(() => {
        const fetchUserCount = async () => {
            try {
                const response = await fetch(`http://localhost:9999/role`);
                const data = await response.json();
                setRoleList(data);
            } catch (error) {
                console.error('Error fetching user count:', error);
            }
        };

        fetchUserCount();
    }, [])
    return (
        <>
            <SideBar />
            {/* navbar*/}
            <div className='page'>
                <HeaderDashboard />

                <div className='row breadcrumbbb' style={{ padding: '0 3rem' }}>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 py-3">
                            <li className="breadcrumb-item"><Link to={'/admin'}>Bảng điều khiển</Link></li>
                            <li className="breadcrumb-item active fw-light" aria-current="page">Người dùng</li>
                        </ol>
                    </nav>
                </div>
                <div className="row py-5" style={{ padding: '0 3rem' }}>
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header border-bottom">
                                <h3 className="h4 mb-0">Danh Sách người dùng</h3>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table text-sm mb-0">
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Fullname</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Role</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                userList.map((u, index) =>
                                                    <tr>
                                                        <th scope="row">{index+1}</th>
                                                        <td>{u.fullname}</td>
                                                        <td>{u.email}</td>
                                                        <td>{u.phone}</td>
                                                        <td>
                                                            {
                                                                roleList.map(r => r.id === u.role_id ? r.role_name : '')
                                                            }
                                                        </td>
                                                    </tr>
                                            )
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* table user */}

        </>
    )
}
export default ListUserDashboard;