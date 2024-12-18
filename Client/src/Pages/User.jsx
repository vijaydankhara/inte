import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:1111/api/getall");
        setUsers(response.data);
      } catch (error) {
        console.error("Error Fetching user", error);
      }
    };
    fetchUser();
  }, []);

  const deleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const response = await axios.delete(`http://localhost:1111/api/deleteuser/${userId}`);
        console.log("Delete response:", response.data);
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user._id !== userId)
        );
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-center text-3xl font-bold mb-6 text-white bg-pink-500 py-4 rounded">
        Student Data
      </h1>

      {/* Add New Student Button */}
      <div className="text-center mb-6">
        <Link
          to={`/createuser`}
          className="text-xs px-5 font-bold text-white bg-[#f8601a] hover:bg-[#3029bb] py-2 rounded"
        >
          Add New Student
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded shadow-md ">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left px-6 py-3 text-gray-700">S.No</th>
              <th className="text-left px-6 py-3 text-gray-700">Name</th>
              <th className="text-left px-6 py-3 text-gray-700">Gender</th>
              <th className="text-left px-6 py-3 text-gray-700">Age</th>
              <th className="text-left px-6 py-3 text-gray-700">Email</th>
              <th className="text-left px-6 py-3 text-gray-700">Mobile No</th>
              <th className="text-left px-6 py-3 text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="border-b hover:bg-gray-100">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">
                  {user.firstName} {user.lastName}
                </td>
                <td className="px-6 py-4">{user.gender}</td>
                <td className="px-6 py-4">{user.age}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.mobileNo}</td>
                <td className="px-6 py-4 flex gap-2">
                  {/* Delete Button */}
                  <button className="text-red-500 hover:text-red-700 flex items-center gap-1" onClick={() => deleteUser(user._id)}>
                    <i className="fa-solid fa-trash"></i> Delete
                  </button>
                  {/* Update Button */}
                  <Link
                    to={`/updateuser/${user._id}`}
                    className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
                  >
                    <i className="fa-solid fa-pen-to-square"></i> Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
