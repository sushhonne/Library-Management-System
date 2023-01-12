import { Link } from 'react-router-dom';
import '../styles/landingPage.css'
const LandingPage = () => {
    return (
        <div className="landingPage">

            <div className="homePage">
                <h1>Library Management System</h1>

                <div className="input">

                    <div className="admin">
                        <img src="/images/userlogo.jpg" alt="" />
                        <Link to='/admin-login'><b>Admin Login</b></Link>
                    </div>   

                    <div className="login">
                        <img src="/images/userlogo.jpg" alt="" />
                        <Link to='/user-login'><b>User Login</b></Link>
                    </div> 

                </div>

            </div>

        </div>
      );
}
 
export default LandingPage;



























// import '../styles/landingPage.css'
// import { Link } from "react-router-dom";
// const LandingPage = () => {
//     return (
//         <div className="landingPage" >
//             <div className="selectLoginType">

//                 <div className="h1">
//                     <h1>Library Management System</h1>
//                 </div>
                                
//                 <div className="btn">
//                 <Link to='/admin-login' className="admin-login-btn">Admin Login</Link>
//                 <Link to='/user-login' className="user-login-btn">User Login</Link>
//                 </div>
                
//             </div>
//         </div>
//     );
// }

// export default LandingPage;