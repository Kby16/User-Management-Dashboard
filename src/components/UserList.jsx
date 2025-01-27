import React from "react";

const UserList = ({ users, onEdit, onDelete }) => {
  
  
  return (
    <div className="overflow-x-auto m-4" >
    {users.length > 0 ? 
    <table 
    className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg"
    border="1" style={{ width: "100%", textAlign: "left" }}>
    <thead>
      <tr>
        <th className="py-2 px-4 border-b text-left text-gray-600">ID</th>
        <th className="py-2 px-4 border-b text-left text-gray-600">Name</th>
        <th className="py-2 px-4 border-b text-left text-gray-600">Username</th>
        <th className="py-2 px-4 border-b text-left text-gray-600">Email</th>
        <th className="py-2 px-4 border-b text-left text-gray-600">Website</th>
        <th className="py-2 px-4 border-b text-left text-gray-600">Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td className=" text-center">{user.id}</td>
          <td className="m-2">{user.name || "N/A"}</td>
          <td className="m-2">{user.username || "N/A"}</td>
          <td className="m-2">{user.email || "N/A"}</td>
          <td className="m-2">{user.website || "N/A"}</td>
          <td className="py-2 px-4" >
            <button 
            className="bg-blue-500 text-white px-3 py-1 rounded-md shadow-sm hover:bg-green-600 mr-2"
            onClick={() => onEdit(user)}>Edit</button>
            <button 
            className="bg-red-500 text-white px-3 py-1 rounded-md shadow-sm hover:bg-red-600"
            onClick={() => onDelete(user.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table> 
    :
    <h2>There is no list to show. Add to view, use Add User Button</h2>
    }
    </div>
  );
};

export default UserList;