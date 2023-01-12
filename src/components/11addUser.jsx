import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addUser.css'
const AddUser = () => {
    let [name,setname]=useState("")
    let [age,setage]=useState("")
    let [email,setemail]=useState("")
    let [phoneNumber,setphoneNumber]=useState("")

    let navigate = useNavigate()
    let handleSubmit = (e) =>{
        e.preventDefault();
        let userData = {name,age,email,phoneNumber}

        //potsing to the server
        fetch('http://localhost:1000/users',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userData)
        })
        alert('user added sucessfully')
        navigate('/admin/users-list')
    }
 return ( 
        <div className="addUser">
            <h1>Add a new User</h1>
            <div className="form">
            <form action="" onSubmit={handleSubmit}>
            <div className="name">
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)} required placeholder="name of the user" />
            </div>
            <div className="age">
                <input type="number" value={age} onChange={(e)=>setage(e.target.value)} required placeholder="Your Age" />
            </div>
            <div className="email">
                <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} required placeholder="Enter your E-mail" min={10} max={10} />
            </div>
            <div className="phno">
                <input type="tel" value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)} required placeholder="0-9 digits"/>
            </div>
            <br />
            <button>Submit</button>
            </form>
            </div>
        </div>
     );
}
 
export default AddUser;