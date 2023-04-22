import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function ProfilePage() {
    const [user, setUser] = useState('');
  
    useEffect(() => {
      const id = localStorage.getItem("id");
      const fetchUser = async () => {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        const data = await response.json();
        setUser(data);
      };
      fetchUser();
    }, []);
  
    if (!user) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>Profile Page</h1>
        <div>
          <p>Username: {user.username}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      </div>
    );
  }
  
  export default ProfilePage;