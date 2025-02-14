import React from 'react';
import { useState, useEffect } from "react";
import { auth, db } from "../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div>
      {userDetails && (
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-picture">
              <img src={userDetails.profilePicture} alt="Profile" />
            </div>
            <h2>{userDetails.name}</h2>
            <p>{userDetails.email}</p>
          </div>
          <div className="user-rating">
            <span>Rating:</span> {userDetails.rating}
          </div>
          <div className="user-bio">{userDetails.bio}</div>
        </div>
      )}
    </div>
  );
};

export default Profile;