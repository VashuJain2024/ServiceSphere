import React, { useState, useEffect } from "react";
import "./UserProfile.css";

function UserProfile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <div className="profile-container">
        <div className="loading-placeholder">
          <div className="profile-picture-placeholder"></div>
          <div className="profile-details-placeholder">
            <div className="name-placeholder"></div>
            <div className="email-placeholder"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-picture">
          <img
            src={userData.profilePicture || "/default-profile.png"}
            alt="Profile"
          />
        </div>
        <h2>Welcome, {userData.name}</h2>
        <div className="user-rating">
          <span>Rating: {userData.rating} ⭐</span>
        </div>
      </div>

      <div className="profile-details">
        <h3>About Me</h3>
        <p>{userData.bio}</p>

        <div className="user-info">
          <p>
            <strong>User ID:</strong> {userData.userId}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Location:</strong> {userData.location}
          </p>
        </div>
      </div>

      <div className="profile-management">
        <button>Edit Profile</button>
        <button>Change Password</button>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default UserProfile;