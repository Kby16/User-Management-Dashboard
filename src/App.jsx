import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [error, setError] = useState("");

  // Fetch users from JSONPlaceholder
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch users.");
        const data = await response.json();
        setUsers(data);
        
      } catch (err) {
        setError(err.message);
      }
    };
    fetchUsers();
  }, []);

  //Add User
  const addUser = async (newUser) => {
    try {
      const formattedUser = {
        name: newUser.name,
        username: newUser.username,
        email: newUser.email,
        website: newUser.website,
      };
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedUser),
      });

      
      if (!response.ok) throw new Error("Failed to add user.");
      const data = await response.json();
      const newUserWithId = {...data, id: Date.now()}
      setUsers((prev) => [...prev, newUserWithId]);
      setFormVisible(false);
      setError("")
    } catch (err) {
      setError(err.message);
    }
  };

  // Update user
  const updateUser = async (id, updatedUser) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });
      if (!response.ok) throw new Error("Failed to update user.");
      const data = await response.json();
      setUsers((prev) =>
        prev.map((user) => (user.id === id ? { ...user, ...data } : user))
      );
      setEditingUser(null);
      setFormVisible(false);
      setError("")
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete user.");
      setUsers((prev) => prev.filter((user) => user.id !== id));
      setError("")
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-500 p-4 ">
      <h1 className="text-3xl font-bold mb-4 text-white">User Management Dashboard</h1>
      {error && <p className="text-red-500 font-medium mb-4" style={{ color: "red" }}>{error}</p>}
      <UserList
        users={users}
        onEdit={(user) => {
          setEditingUser(user);
          setFormVisible(true);
        }}
        onDelete={deleteUser}
      />
      {isFormVisible && (
        <UserForm
          onSubmit={editingUser ? updateUser : addUser}
          onCancel={() => setFormVisible(false)}
          editingUser={editingUser}
        />
      )}
      {!isFormVisible && (
        <button 
        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
        onClick={() => setFormVisible(true)}>Add User</button>
      )}
    </div>
  );
};

export default App;