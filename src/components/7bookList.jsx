import { useState, useEffect } from "react";
//import { Routes } from "react-router-dom";
import { useNavigate,useLocation } from "react-router-dom";
import '../styles/bookList.css'
const BookList = () => {
    //to fetch the route value
    let location=useLocation()
    let [books, setBooks] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`http://localhost:1000/books`)
            let data = await response.json();
            setBooks(data)
        }
        fetchData()
    }, [books])

    let handleDelete = (id, title) => {
        fetch(`http://localhost:1000/books/${id}`,{method: 'DELETE'});
        alert(`${title} will be deleted permenantly`)
        // setBooks(books.filter(x=>x.id!=id))
        // alert(`${title} has been deleted`)
    }
    let navigate = useNavigate()
    let handleRead = (id) => {
        if(location.pathname =="/admin/book-List"){
            navigate(`/admin/book-list/${id}`)
        }
        else{
            navigate(`/user/book-List/${id}`)
        }
        
    }
    return (
        <div className="bookList">
            <h1>Book List:{books.length}</h1>
            <div className="book-section">
                {books.map((x) => (
                    < div className="book-list">
                        <div className="image">
                            <img src={x.thumbnailUrl} alt="" />
                        </div>
                        <div className="info">
                            <h1>Title:{x.title}</h1>
                            <h3>Authors:{x.authors}</h3>
                            <h3>Pages:{x.pageCount}</h3>
                            <h3>Category:{x.categories.toString()}</h3>
                            <button onClick={() => handleRead(x.id)}>Read More</button> 
                            {location.pathname=="/admin/book-List" &&  <button onClick={() => handleDelete(x.id, x.title)}>Delete</button> }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookList;

//fetch entire route -useLocation
//fetch particular id -usePArams