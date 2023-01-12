import { Link } from "react-router-dom";
import '../styles/userNavbar.css'

const UserNavbar = () => {
    return ( 
        <div className="userNavbar">

             <div className="title">
                <h1>User Portal</h1>
            </div>

            <div className="links">
                <Link to="/user/"          >DashBoard</Link>
                <Link to="/user/book-List" >Book List</Link>
                <Link to="/"               >Logout</Link >
            </div>

        </div>
     );
}
 
export default UserNavbar;