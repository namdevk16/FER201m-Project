import { useRef, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const ChangePasswordForm = () => {

    const navigate = useNavigate();

    const [newpass, setNewpass] = useState('');
    const [confirmpass, setConfirmpass] = useState('');
    const errorNewPass = useRef();
    const errorConfirmPass = useRef();
    const listInputs = [newpass, confirmpass];
    const listErrors = [errorNewPass, errorConfirmPass];
    console.log(listInputs);
    console.log(listErrors);

    const checkConfirm = () => {
        if (listInputs.every(listInput => listInput !== '') && newpass === confirmpass) {
            return 1;
        } else if (listInputs.every(listInput => listInput !== '') && newpass !== confirmpass) {
            return 2;
        } else if (listInputs.some(listInput => listInput === '')) {
            return 3;
        }
    }

    const checkValidate = () => {
        if (listInputs.every(listInput => listInput === '')) {
            listErrors.forEach(listError =>
                listError.current.style.display = 'block'
            )
        }
        for (var i = 0; i < listInputs.length; i++) {
            if (listInputs[i] !== '') {
                listErrors[i].current.style.display = 'none'
                for (var j = 0; j < listInputs.length; j++) {
                    if (i !== j && listInputs[i] === '') {
                        listErrors[j].current.style.display = 'block';
                    }
                }
            }
        }
    }


    const handleUpadate = () => {
        if (checkConfirm() === 1) {
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
            fetch(`http://localhost:9999/account/${JSON.parse(sessionStorage.getItem('account')).id}`, option)
                .then(res => res.json())
                .then(data => {
                    if (data !== null) {
                        alert('Mật khẩu của bạn đã được thay đổi thành công');
                        navigate('/');
                    }
                })
        } else if (checkConfirm() === 2) {
            alert('Hãy nhập đúng với mật khẩu của bạn')
        } else if (checkConfirm() === 3) {
            checkValidate();
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
                                <label htmlFor='newpass'>Mật khẩu mới</label>
                                <input id='newpass' type='text' className="form-control" value={newpass} onChange={(e) => setNewpass(e.target.value)} />
                                <span style={{ color: 'red', display: 'none', fontSize: '12px' }} className='error' ref={errorNewPass}>Hãy nhập mật khẩu mới</span>
                            </div>
                            <div className="input">
                                <label htmlFor='confirmpass'>Xác nhận mật khẩu</label>
                                <input id='confirmpass' type='text' className="form-control" value={confirmpass} onChange={(e) => setConfirmpass(e.target.value)} />
                                <span style={{ color: 'red', display: 'none', fontSize: '12px' }} className='error' ref={errorConfirmPass}>Mật khẩu sai</span>
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