import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MDBBtn, MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);
    const navigate = useNavigate();

    const loginRemember = () => {
        if (localStorage.getItem('account')) {
            const obj = JSON.parse(localStorage.getItem('account'));
            setEmail(obj.email);
            setPassword(obj.password);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:9999/account?email=${email}&password=${password}`)
            .then(res => res.json())
            .then(data => {
                if (data[0] !== undefined && data[0].role_id !== 1) {
                    sessionStorage.setItem('account', JSON.stringify(data[0]));
                    if (check === true) {
                        localStorage.setItem('account', JSON.stringify(data[0]));
                    }
                    navigate('/')
                } else if (data[0] !== undefined && data[0].role_id === 1) {
                    sessionStorage.setItem('account', JSON.stringify(data[0]));
                    navigate('/admin');
                } else {
                    toast.error('Your account not exist')
                }
            })
    }




    return (
        <div className='login-form' style={{margin:'10% 0 5% 0'}}>
            <MDBContainer className="my-5 gradient-form">

                <MDBRow>
                    <MDBCol col='6' className="mb-5">
                        <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                <h4 className="mb-4">First Time Here?</h4>
                                <p className="small mb-0">Feel free to join with us</p>
                            </div>

                        </div>

                    </MDBCol>


                    <MDBCol col='6' className="mb-5">
                        <div className="d-flex flex-column ms-5">

                            <div className="text-center">
                                <img src="https://admin.googleusercontent.com/logo-scs-key2294502"
                                    style={{ width: '185px' }} alt="logo" />

                            </div>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div>
                                    <label>Email address</label>
                                    <input className="form-control" style={{ padding: '5px 0', marginTop: '10px 0' }} id='form1' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <span style={{ color: "red" }} className="error-email" ></span>
                                </div>
                                <div>
                                    <label>Password</label>
                                    <input className="form-control" style={{ padding: '5px 0', marginTop: '10px 0' }} id='form2' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />                                     <span style={{ color: "red" }} className="error-password" ></span>
                                </div>
                                <div>
                                    <input type='checkbox' checked={check} onChange={(e) => setCheck(e.target.checked)} name='Remember Me' /><i style={{ paddingLeft: '5px' }}>Remember Me</i>
                                </div>



                                <div className="text-center pt-1 mb-5 pb-1">
                                    <MDBBtn className="mb-4 w-100 gradient-custom-2" type='submit'>Login</MDBBtn>
                                    <NavLink to={'/forgotpassword'} style={{ color: 'rgb(42, 42, 42)' }} className={({ isActive }) => isActive ? "active-body" : ""}>Forgot Password?</NavLink>
                                </div>
                            </form>
                        </div>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </div>
    );
}

export default Login;