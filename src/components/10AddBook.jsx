import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addBook.css'
const AddBook = () => {
    //title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl
    let [title,setTitle] = useState("")
    let [authors,setauthors] = useState("")
    let [categories,setcategories] = useState("")
    let [pageCount,setpageCount] = useState("")
    let [shortDescription,setshortDescription] = useState("")
    let [longDescription,setlongDescription] = useState("")
    let [thumbnailUrl,setthumbnailUrl] = useState("")

    let navigate = useNavigate()
    let handleSubmit = (e) =>{
        //prevent renderng of the page
        e.preventDefault();
        let bookData = {title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl}

        //posting to the server
        fetch('http://localhost:1000/books',{
        method:'POST',
        //type of data being sent to browser is json
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(bookData)
        })
        alert('books added sucessfully')
        navigate('/admin/book-list')
    }
    return ( 
        <div className="addbook">
            <h1>Add a Book</h1>
            <div className="form">
                <form action="" className="form-group" onSubmit={handleSubmit}>
                    <div className="title">
                        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="title of the book" required/>
                    </div>
                    <div className="authors">
                        <input value={authors} onChange={(e)=>setauthors(e.target.value)} type="text" placeholder="Writer name" required />
                    </div>
                    <div className="categories">
                        <input value={categories} onChange={(e)=>setcategories(e.target.value)} type="text" placeholder="Categories" required/>
                    </div>
                    <div className="pageCount">
                        <input value={pageCount} onChange={(e)=>setpageCount(e.target.value)} type="number" placeholder="page count of the book" required/>
                    </div>
                    <div className="shortDescription">
                        <label htmlFor="">Short Description:</label>
                        <textarea value={shortDescription} onChange={(e)=>setshortDescription(e.target.value)} type="text" required cols="30" rows="10"/>
                    </div>
                    <div className="longDescription">
                    <label htmlFor="">Long Description:</label>
                        <textarea value={longDescription} onChange={(e)=>setlongDescription(e.target.value)} type="text" required cols="30" rows="10"/>
                    </div>
                    <div className="thumbnailUrl">
                        <input value={thumbnailUrl} onChange={(e)=>setthumbnailUrl(e.target.value)} type="text" placeholder="Image of the book" required />
                    </div>
                    <button>Add Book</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddBook;