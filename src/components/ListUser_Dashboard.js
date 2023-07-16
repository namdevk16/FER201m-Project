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
                        <ol class="breadcrumb mb-0 py-3">
                            <li class="breadcrumb-item"><Link to={''}>Bảng kiểm duyệt</Link></li>
                            <li class="breadcrumb-item active fw-light" aria-current="page">Người dùng</li>
                        </ol>
                    </nav>
                </div>
                <div className='row py-3' style={{ padding: '0 3rem' }}>
                    <h4>Filter by user:</h4>
                    <form>
                        <div className='item_input'>
                            <input type='radio' name='account' id='user' checked />
                            <label htmlFor='user'>User</label>
                        </div>
                        <div className='item_input'>
                            <input type='radio' name='account' id='host' checked />
                            <label htmlFor='host'>Host</label>
                        </div>
                        <div className='item_input'>
                            <input type='radio' name='account' id='all' checked />
                            <label htmlFor='host'>All</label>
                        </div>
                    </form>
                </div>
                <div className="row py-5" style={{ padding: '0 3rem' }}>
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header border-bottom">
                                <h3 class="h4 mb-0">Danh Sách người dùng</h3>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table text-sm mb-0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
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
                                                        <th scope="row">{index}</th>
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