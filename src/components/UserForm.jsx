import React, { useState, useEffect } from "react";

const UserForm = ({ onSubmit, onCancel, editingUser }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    website: "",
  });

  useEffect(() => {
    if (editingUser) {
      setFormData({
        id: editingUser.id || "",
        name: editingUser.name || "",
        username: editingUser.username || "",
        email: editingUser.email || "",
        website: editingUser.website || "",
      });
    } else {
      setFormData({
        id: "",
        name: "",
        username: "",
        email: "",
        website: "",
      });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      onSubmit(editingUser.id, formData); // Update user
    } else {
      onSubmit(formData); // Add new user (no id needed)
    }
    setFormData({
      id: "",
      name: "",
      username: "",
      email: "",
      website: "",
    });
  };

  return (
    <form 
    className="bg-white p-6 rounded-lg shadow-md border border-gray-300 w-full max-w-md"
    onSubmit={handleSubmit}>
      <input
        className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="username"
        placeholder="Userame"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <input
        className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="website"
        placeholder="Website"
        value={formData.website}
        onChange={handleChange}
        required
      />
        <button 
      className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition w-full"
      type="submit">
        {editingUser ? "Update" : "Add"} User
        </button>
      <button 
        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400 transition w-full mt-2"
        type="button" 
        onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default UserForm;