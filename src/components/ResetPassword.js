import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';


const ResetPassword = () => {
    const { email } = useParams();
    const navigate = useNavigate();
    const [account, setAccount] = useState();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    useEffect(() => {
        fetch(`http://localhost:9999/account?email=${email}`)
            .then(res => res.json())
            .then(data => setAccount(data[0]))
    })

    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (newPassword === confirmPassword) {
            try {
                const response = await fetch(`http://localhost:9999/account/${account.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        fullname: account.fullname,
                        email: email,
                        phone: account.phone,
                        password: newPassword,
                        avatar: account.avatar,
                        role_id: account.role_id
                    }),
                });

                if (response.ok) {
                    toast.success('Password updated successfully');
                    navigate('/login');
                } else {
                    toast.error('Failed to update password');
                }
            } catch (error) {
                // console.log('Error:', error);
            }
        } else {
            toast.error('Passwords do not match');
        }
    };

    return (
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                    <div className="d-table-cell align-middle">

                        <div className="text-center mt-4">
                            <h1 className="h2">Reset password</h1>
                            <p className="lead">
                                Set a new password
                            </p>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="m-sm-4">
                                    <form onSubmit={handleResetPassword}>
                                        <div className="form-group">
                                            <input className="form-control form-control-lg"
                                                type="password"
                                                placeholder="New Password"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)} />
                                            <input className="form-control form-control-lg"
                                                type="password"
                                                placeholder="Confirm Password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            
                                        </div>
                                        <div className="text-center mt-3">
                                            <button type="submit" className="btn btn-lg btn-primary">Save Change</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default ResetPassword;