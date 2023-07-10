import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';

const ChangePasswordForm = () => {
    return (
        <div className='signup-form'>
            <Container className="my-5 gradient-form">

                <Row>
                    <div className='col-lg-6 col-md-12 col-sm-12 p-left'>
                        <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                <h4 class="mb-4">Did you forgot your password?</h4>
                                <p class="small mb-0">Back to Login</p>
                            </div>

                        </div>

                    </div>

                    <form className='col-lg-6 col-md-12 col-sm-12 p-right' >
                        <div className="d-flex flex-column ms-5">
                            <h3>Change password</h3>
                            <div className="input">
                                <label htmlFor='email'>Email</label>
                                <input id='email' type='text' className="form-control"/>
                            </div>
                            <div className="input">
                                <label htmlFor='newpass'>New password</label>
                                <input id='newpass' type='text' className="form-control"/>
                            </div>
                            <div className="input">
                                <label htmlFor='confirmpass'>Confirm password</label>
                                <input id='confirmpass' type='text' className="form-control"/>
                            </div>  
                        </div>

                    </form>

                </Row>

            </Container>
        </div>
    );
}
 
export default ChangePasswordForm;