import { useState,useEffect } from "react";
import '../styles/usersList.css'

const UsersList = () => {
    let[users,setUsers]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
             let response =await fetch('http://localhost:1000/users')
              let data= await response.json();
              setUsers(data)
        }
        fetchData()
    },[users])
    let handleDelete=(id,name)=>{
        setUsers(users.filter(x=>x.id!=id))
        alert(`${name} has been deleted`)
    }
    return ( 
        <div className="usersList">
            <h1>Users list:{users.length}</h1>
            <div className="book-section">
                {users.map((x)=>(
                    <div className="user-list">
                        <h1>Name:{x.name}</h1>
                        <h3>Age:{x.age}</h3>
                        <h3>Email:{x.email}</h3>
                        <h2>Ph.no:{x.phno}</h2>
                        <button onClick={()=>handleDelete(x.id,x.name)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default UsersList;