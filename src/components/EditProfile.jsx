import React, { useState, useEffect } from "react";
import "./EditProfile.css";
import { auth, db, storage } from "../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export default function EditProfile() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [location, setLocation] = useState("");
    const [profilePic, setProfilePic] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const user = auth.currentUser;
    useEffect(() => {
        if (user) {
            fetchUserData();
        }
    }, [user]);

    // Fetch user data from Firestore
    const fetchUserData = async () => {
        try {
            const userRef = doc(db, "Users", user.uid);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
                const data = userSnap.data();
                setName(data.name || "");
                setEmail(data.email || "");
                setBio(data.bio || "");
                setLocation(data.location || "");
                setPreviewUrl(data.profilePicture || "");
            }
        } catch (error) {
            toast.error("Error fetching profile data.");
        }
    };

    // Handle Profile Picture Change
    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePic(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    // Save updated data to Firestore
    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (!user) {
                toast.error("User not found!");
                setLoading(false);
                return;
            }

            let imageUrl = previewUrl;

            if (profilePic) {
                console.log("Uploading profile picture...");
                try {
                    const imageRef = ref(storage, `profile_pictures/${user.uid}`);
                    await uploadBytes(imageRef, profilePic);
                    imageUrl = await getDownloadURL(imageRef);
                    console.log("Profile picture uploaded:", imageUrl);
                } catch (uploadError) {
                    console.error("Error during upload:", uploadError);
                    toast.error("Failed to upload profile picture.");
                }
            }

            const userRef = doc(db, "Users", user.uid);
            console.log("Updating user:", user.uid);
            await updateDoc(userRef, {
                name,
                bio,
                location,
                profilePicture: imageUrl,
            });

            toast.success("Profile updated successfully!");
            // Navigate after successful update
            navigate("/profile");
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.error("Failed to update profile.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="edit-profile-container">
            <h2>Edit Profile</h2>
            <form onSubmit={handleUpdateProfile}>
                <label>Profile Picture</label>
                <input type="file" accept="image/*" onChange={handleProfilePicChange} />
                <div className="profile-pic">
                    {previewUrl && (
                        <img
                            src={previewUrl}
                            alt="Profile Preview"
                            className="profile-preview"
                        />
                    )}
                </div>

                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" value={email} disabled />
                </div>

                <div>
                    <label>Bio</label>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Tell something about yourself"
                    ></textarea>
                </div>

                <div>
                    <label>Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Your city or country"
                    />
                </div>

                {/* Remove onClick from button */}
                <button type="submit" disabled={loading}>
                    {loading ? "Saving..." : "Save Changes"}
                </button>
            </form>
        </div>
    );
}
