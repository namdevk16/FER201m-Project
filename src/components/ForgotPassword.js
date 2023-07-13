import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [emailExists, setEmailExists] = useState(false); // Trạng thái để kiểm tra xem email có tồn tại hay không

    const handleForgotPassword = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:9999/account`); // Đường dẫn tới file data.json
            const data = await response.json();

            // Kiểm tra email có tồn tại trong data.json
            const emailExists = data.some((item) => item.email === email);
            setEmailExists(emailExists);

            if (emailExists) {
                // Chuyển hướng đến trang ResetPassword
                navigate(`/resetpassword/${email}`);
            } else {
                alert('Email does not exist');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };




    return (
        <div class="container h-100">
    		<div class="row h-100">
				<div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div class="d-table-cell align-middle">

						<div class="text-center mt-4">
							<h1 class="h2">Forgot password</h1>
							<p class="lead">
								Enter your email to reset your password.
							</p>
						</div>

						<div class="card">
							<div class="card-body">
								<div class="m-sm-4">
									<form onSubmit={handleForgotPassword}>
										<div class="form-group">
											<label>Email</label>
											<input class="form-control form-control-lg" value={email} type="email" name="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
										</div>
										<div class="text-center mt-3">
											<button type="submit" class="btn btn-lg btn-primary">Submit</button> 
										</div>
									</form>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
        )
}

export default ForgotPassword;