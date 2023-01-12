import AdminNavbar from "./5adminNavbar";
import { Routes,Route } from "react-router-dom";
import AdmindashBoard from "./6adminDashBoard";
import BookList from "./7bookList";
import UsersList from "./8usersList";
import ReadBook from "./9readBook";
import AddBook from "./10AddBook";
import AddUser from "./11addUser";  
const AdminHome = () => {
    return ( 
        <div className="adminHome">
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={<AdmindashBoard/>}/>
                <Route path="/book-List" element={<BookList/>}/>
                <Route path="/users-List" element={<UsersList/>}/>
                <Route path="/book-List/:id" element={<ReadBook/>}/>
                <Route path="/add-book" element={<AddBook/>}/>
                <Route path="/add-user" element={<AddUser/>}/>
            </Routes>
        </div>
     ); 
}
 
export default AdminHome;
//one web page, one browser router