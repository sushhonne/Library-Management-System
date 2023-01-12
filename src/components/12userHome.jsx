import { Routes,Route } from "react-router-dom";
import UserNavbar from "./13userNavbar";
import UserDashBoard from "./14userDashBoard";
import BookList from "./7bookList";
import ReadBooks from "./9readBook";

const userHome = () => {
    return ( 
        <div className="userHome">
            <UserNavbar/>
            <Routes>
                <Route path="/" element={<UserDashBoard/>}/>
                <Route path="/book-list" element={<BookList/>}/>
                <Route path="/book-List/:id" element={<ReadBooks/>}/>
            </Routes>
        </div>
     );
}
 
export default userHome;