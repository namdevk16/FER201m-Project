

const ChangePasswordForm = () => {
    return (
        <div className="change-password">
            <div>
                <h3>Did you forgot your password?</h3>

                <p>Back to login</p>

                <button>Login</button>
            </div>

            <div>
                <h3>Reset password</h3>
                <form>
                    <input type="text" name="email" placeholder="Enter your email"/>
                    <input type="password" name="password" placeholder="Enter your new password"/>
                    <input type="password" name="confirm_password" placeholder="Confirm your new password"/>
                    <button>Reset</button>
                </form>
            </div>
        </div>
    );
}
 
export default ChangePasswordForm;