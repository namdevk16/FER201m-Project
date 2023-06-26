import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';


function SignUp() {
    return (
        <div className='signup-form'>
            <MDBContainer className="my-5 gradient-form">

                <MDBRow>
                    <MDBCol col='6' className="mb-5">
                        <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                <h4 class="mb-4">Do you already have an account?</h4>
                                <p class="small mb-0">Back to Login</p>
                            </div>

                        </div>

                    </MDBCol>


                    <MDBCol col='6' className="mb-5">
                        <div className="d-flex flex-column ms-5">
                            <h3>Sign Up</h3>

                            <MDBInput wrapperClass='mb-4' label='UserName' id='form1' type='text' />
                            <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' />
                            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' />
                            <MDBInput wrapperClass='mb-4' label='Phone Number' id='form1' type='number' />
                            <MDBInput wrapperClass='mb-4' label='Role' id='form1' type='checkbox' />

                            <div className="text-center pt-1 mb-5 pb-1">
                                <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign Up</MDBBtn>
                                <NavLink to={'/login'} style={{color: 'rgb(42, 42, 42)'}} className={({ isActive }) => isActive ? "active-body" : ""}>Back to Login?</NavLink>
                            </div>

                        </div>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </div>
    );
}

export default SignUp;