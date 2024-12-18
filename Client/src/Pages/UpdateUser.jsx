import React, { useState,useEffect } from "react";
import "./UpdateUser.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios'

function UpdateUser() {
  const initialUser = {
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    email: "",
    mobileNo: "",
  };
  const {id} = useParams();
  const navigate = useNavigate();
  const [user,setUser] = useState(initialUser);

  const inputChange = (e) =>{
    const {name,value} = e.target;
    setUser({...user,[name] : value})
  };

  useEffect(()=>{
     axios.get(`http://localhost:1111/api/getone/${id}`)
     .then((response)=>{
      setUser(response.data);
     })
     .catch((error)=>{
      console.log(error);
     });
  },[id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:1111/api/update/${id}`, user)
      .then(() => {
        console.log("User updated successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log("Error updating user:", error);
      });
  };

  return (
    <div className="updateuser">
      <Link to={"/"} className="text-red-500 font-bold font-serif ">Back</Link>
      <h3>Update Student</h3>

      <form onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="firstName">Frist Name :</label>
          <input
            type="text"
            onChange={inputChange}
            value={user.firstName}
            id="firstName"
            name="firstName"
            autoComplete="off"
            placeholder="Enter The Frist Name"
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="lastName">Last Name :</label>
          <input
            type="text"
            onChange={inputChange}
            value={user.lastName}
            id="lastName"
            name="lastName"
            autoComplete="off"
            placeholder="Enter The Last Name"
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="gender">Gender</label>
          <select name="gender"
          onChange={inputChange}
          value={user.gender}
          id="gender" required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="inputGroup">
          <label htmlFor="age">Age :</label>
          <input
            type="number"
            onChange={inputChange}
            value={user.age}
            id="age"
            name="age"
            autoComplete="off"
            placeholder="Enter The Age"
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="email">Email Id :</label>
          <input
            type="email"
            onChange={inputChange}
            value={user.email}
            id="email"
            name="email"
            autoComplete="off"
            placeholder="johan2@gmail.com"
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="mobileNo">Mobile Number :</label>
          <input
            type="tel"
            onChange={inputChange}
            value={user.mobileNo}
            id="mobileNo"
            name="mobileNo"
            autoComplete="off"
            placeholder="+91 9876543210"
            required
          />
        </div>
       

        <div className="inputGroup">
          <button  type="submit">Update Form</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;

