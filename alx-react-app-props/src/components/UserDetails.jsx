// src/components/UserProfile.jsx
import { useContext } from "react";
import UserContext from "../UserContext";

function UserProfile() {
  const userData = useContext(UserContext); // Consume context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
