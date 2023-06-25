import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';


function Login() {
    return (
        <div className='login-form'> 
        <MDBContainer className="my-5 gradient-form">

            <MDBRow>
                <MDBCol col='6' className="mb-5">
                    <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h4 class="mb-4">First Time Here?</h4>
                            <p class="small mb-0">Feel free to join with us</p>
                        </div>

                    </div>

                </MDBCol>


                <MDBCol col='6' className="mb-5">
                    <div className="d-flex flex-column ms-5">

                        <div className="text-center">
                            <img src="https://admin.googleusercontent.com/logo-scs-key2294502"
                                style={{ width: '185px' }} alt="logo" />
                            
                        </div>


                        <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' />
                        <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />


                        <div className="text-center pt-1 mb-5 pb-1">
                            <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
                            <a className="text-muted" href="#!">Forgot password?</a>
                        </div>

                    </div>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
        </div>
    );
}

export default Login;