import React, { useState, useEffect, useContext } from "react";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import defaultImage from "../assets/default-image.png";
import { isLoggedContext } from "../contexts/isLogged";
import { toast } from "react-toastify";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { isLogged, setIsLogged } = useContext(isLoggedContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          } else {
            console.log("User document does not exist");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("No user logged in");
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup function for listener
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      toast.success("User logged out successfully!", { position: "top-center" });
      navigate("/home");
      setIsLogged(false);
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {userDetails ? (
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-picture">
              <img src={userDetails.profilePicture ? userDetails.profilePicture : defaultImage} alt="Profile" />
            </div>
            <h2>{userDetails.name}</h2>
            <p>{userDetails.email}</p>
          </div>
          <div className="user-bio">{userDetails.bio || "No bio available"}</div>
          <button onClick={() => navigate("/editprofile")}>Edit Profile</button>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default Profile;
