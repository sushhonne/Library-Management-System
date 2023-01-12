import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adminLogin.css'

const AdminLogin = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate()
    let handleLogin = (e) => {
        e.preventDefault()
        let data = {email, password}
        // console.log(data);
        if (email == "admin@gmail.com" && password == 1234) {
            navigate('/admin/')
        }
        else {
            alert('Invalid credentials')
        }

    }
    return (
        <div className="adminLogin">
            <div className="form-container-card">
                <h1>Admin Login !</h1>
                <div className="form-input">
                    <form action="" onSubmit={handleLogin}>
                        <div className="email-input">
                            <label htmlFor="">Email</label>
                             <br />
                            <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                        </div>
                        <div className="password-input">
                            <label htmlFor="">Password</label>
                             <br />
                            <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
                        </div>
                        <button className="login-btn"><b>Login</b></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;