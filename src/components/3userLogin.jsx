
import { useNavigate } from "react-router-dom";
import '../styles/userLogin.css'

const UserLogin = () => {
    let navigate = useNavigate()
    let handleLogin=()=>{
        navigate('/user/')
    }
    return ( 
        <div className="userLogin">
            <div className="form-container-card">
                <h1>User Login !</h1>
                <div className="form-input">
                    <form action="" onSubmit={handleLogin}>
                        <div className="email-input">
                            <label htmlFor="">Email</label> <br />
                            <input type="email"  placeholder="Enter Email" />
                        </div>
                        <div className="password-input">
                            <label htmlFor="">Password</label> <br />
                            <input type="password"  placeholder="Enter password" />
                        </div>
                        <button className="login-btn"><b>Login</b></button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default UserLogin;