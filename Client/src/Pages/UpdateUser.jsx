import React from "react";
import "./UpdateUser.css";
import { Link } from "react-router-dom";

function UpdateUser() {
  return (
    <div className="updateuser">
      <Link to={"/"} className="text-red-500 font-bold font-serif ">Back</Link>
      <h3>Update Student</h3>

      <form>
        <div className="inputGroup">
          <label htmlFor="fristname">Frist Name :</label>
          <input
            type="text"
            id="fristname"
            name="fristname"
            autoComplete="off"
            placeholder="Enter The Frist Name"
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="lastname">Last Name :</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            autoComplete="off"
            placeholder="Enter The Last Name"
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender" required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="inputGroup">
          <label htmlFor="age">Age :</label>
          <input
            type="number"
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
            id="email"
            name="email"
            autoComplete="off"
            placeholder="johan2@gmail.com"
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="mobailNo">Mobile Number :</label>
          <input
            type="tel"
            id="mobailNo"
            name="mobailNo"
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

