import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';


const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [role_id, setRole_id] = useState('3');

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleRoleChange = (event) => {
        setRole_id(parseInt(event.target.value));
    };

    const handleRegister = (e) => {
        const listInputs = document.querySelectorAll('.form-control');
        const listErrors = document.querySelectorAll('.error');
        if ([...listInputs].every(listInput => listInput.value !== '')) {
            const newAccount = {
                fullName: fullName,
                password: password,
                email: email,
                phone: phoneNumber,
                role_id: role_id
            };
            const option = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(newAccount)
            }
            fetch(`http://localhost:9999/account`, option)
                .then(res => res.json())
                .then(() => {
                    alert('Đăng ký thành công.');
                })
                .catch((error) => {
                    console.log(error);
                    alert('Có lỗi xảy ra khi đăng ký.');
                });
        }
        e.preventDefault();
        if ([...listInputs].every(listInput => listInput.value === '')) {
            [...listErrors].forEach(listError =>
                listError.style.display = 'block'
            )
        }
        for (var i = 0; i < listInputs.length; i++) {
            if (listInputs[i].value !== '') {
                listErrors[i].style.display = 'none'
                for (var j = 0; j < listInputs.length; j++) {
                    if (i !== j && listInputs[i].value === '') {
                        listErrors[j].style.display = 'block';
                    }
                }
            }
        }
    };




    return (
        <div className='signup-form'>
            <Container className="my-5 gradient-form">

                <Row>
                    <div className='col-lg-6 col-md-12 col-sm-12 p-left'>
                        <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                <h4 class="mb-4">Do you already have an account?</h4>
                                <p class="small mb-0">Back to Login</p>
                            </div>

                        </div>

                    </div>

                    <form onSubmit={e => handleRegister(e)} className='col-lg-6 col-md-12 col-sm-12 p-right' >
                        <div className="d-flex flex-column ms-5">
                            <h3>Sign Up</h3>
                            <div className="input">
                                <label>FullName</label>
                                <input className="form-control" style={{ padding: '5px 0', marginTop: '10px 0' }} type='text' value={fullName} onChange={handleFullNameChange} />
                                <span style={{ color: 'red', display: 'none', fontSize: '12px' }} className='error'>Hãy nhập đủ thông tin</span>
                            </div>
                            <div className="input">
                                <label>Password</label>
                                <input className="form-control" style={{ padding: '5px 0', marginTop: '10px 0' }} type='password' value={password} onChange={handlePasswordChange} />
                                <span style={{ color: 'red', display: 'none', fontSize: '12px' }} className='error'>Hãy nhập đủ thông tin</span>
                            </div>
                            <div className="input">
                                <label>Email address</label>
                                <input className="form-control" style={{ padding: '5px 0', marginTop: '10px 0' }} type='email' value={email} onChange={handleEmailChange} />
                                <span style={{ color: 'red', display: 'none', fontSize: '12px' }} className='error'>Hãy nhập đủ thông tin</span>
                            </div>
                            <div className="input">
                                <label>Phone Number</label>
                                <input className="form-control" style={{ padding: '5px 0', marginTop: '10px 0' }} type='number' value={phoneNumber} onChange={handlePhoneNumberChange} />
                                <span style={{ color: 'red', display: 'none', fontSize: '12px' }} className='error'>Hãy nhập đủ thông tin</span>
                            </div>
                            <label>Role</label>
                            <select value={role_id} style={{ padding: '5px', borderRadius: '7px' }} onChange={handleRoleChange} >
                                <option value={3} selected>Chủ sở hữu</option>
                                <option value={2}>Người dùng</option>
                            </select>


                            <div className="text-center pt-1 mb-5 pb-1" style={{ marginTop: '20px' }}>
                                <button className="mb-4 w-100 gradient-custom-2" style={{ padding: '5px', color: 'white' }} type='submit'>Sign Up</button>
                                <NavLink to={'/login'} style={{ color: 'rgb(42, 42, 42)' }} className={({ isActive }) => isActive ? "active-body" : ""}>Back to Login?</NavLink>
                            </div>

                        </div>

                    </form>

                </Row>

            </Container>
        </div>
    );
}

export default SignUp;