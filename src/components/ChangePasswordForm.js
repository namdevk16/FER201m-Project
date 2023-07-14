import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const ChangePasswordForm = () => {

    const navigate = useNavigate();

    const [oldpass, setOlpass] = useState('');
    const [newpass, setNewpass] = useState('');
    const [confirmpass, setConfirmpass] = useState('');
    

    const handleUpadate = () => {
        if(newpass === confirmpass) {
            const data = {
                fullname: JSON.parse(sessionStorage.getItem('account')).fullname,
                email: JSON.parse(sessionStorage.getItem('account')).email,
                phone: JSON.parse(sessionStorage.getItem('account')).phone,
                password: newpass,
                avatar: JSON.parse(sessionStorage.getItem('account')).avatar,
                role_id: JSON.parse(sessionStorage.getItem('account')).role_id
            }
            const option = {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(data)
            }
            fetch(`http://localhost:9999/account/${JSON.parse(sessionStorage.getItem('account')).id}`)
                .then(res => res.json())
                .then(data => {
                    if(data !== null) {
                        alert('Mật khẩu của bạn đã được thay đổi thành công');
                        navigate('/');
                    }
                })
        }
    }

    return (
        <div className='signup-form'>
            <Container className="my-5 gradient-form">

                <Row>
                    <div className='col-lg-6 col-md-12 col-sm-12 p-left'>
                        <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                <h4 class="mb-4">Did you want to change your password?</h4>
                            </div>

                        </div>

                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12 p-right' >
                        <div className="d-flex flex-column ms-5">
                            <h3>Change password</h3>
                            <div className="input">
                                <label htmlFor='email'>Mật khẩu cũ</label>
                                <input id='email' type='text' className="form-control" value={oldpass} onChange={(e) => setOlpass(e.target.value)} />
                            </div>
                            <div className="input">
                                <label htmlFor='newpass'>Mật khẩu mới</label>
                                <input id='newpass' type='text' className="form-control" value={newpass} onChange={(e) => setNewpass(e.target.value)} />
                            </div>
                            <div className="input">
                                <label htmlFor='confirmpass'>Xác nhận mật khẩu</label>
                                <input id='confirmpass' type='text' className="form-control" value={confirmpass} onChange={(e) => setConfirmpass(e.target.value)} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Link style={{ textDecoration: 'none' }} to={'/'}>Cancel</Link>
                            <button className='btn btn-primary' onClick={handleUpadate}>Cập nhật</button>
                        </div>
                    </div>

                </Row>

            </Container>
        </div>
    );
}

export default ChangePasswordForm;