import '../styles/adminNavbar.css'
import { Link } from 'react-router-dom';
const AdminNavbar = () => {
    return (

        <div className="adminNavbar">

            <div className="title">
                <h1>AdminPortal</h1>
            </div>

            <div className="links">
                <Link to="/admin/"          >DashBoard</Link>
                <Link to="/admin/add-book"  >Add Books</Link>
                <Link to="/admin/add-user"  >Add Users</Link >
                <Link to="/admin/book-List" >Book List</Link >
                <Link to="/admin/users-List">Users List</Link >
                <Link to="/"                >Logout</Link >
            </div>

        </div>

    );
}

export default AdminNavbar;