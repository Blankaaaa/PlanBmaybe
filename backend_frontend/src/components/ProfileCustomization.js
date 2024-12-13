import React, { useState } from "react";
import "./ProfileCustomization.css";

const ProfileCustomization = () => {
    const [circleColor, setCircleColor] = useState("#3498db");
    const [uploadedImage, setUploadedImage] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [name, setName] = useState("Your Name");
    const [status, setStatus] = useState("Add a status...");

    const handleColorChange = (event) => {
        setCircleColor(event.target.value);
    };

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("data", file);
        formData.append("circleColor", circleColor);

        setIsUploading(true);

        try {
            const response = await fetch("http://localhost:8080/photoz", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Failed to upload file.");
            }

            const uploadedPhoto = await response.json();
            setUploadedImage(`http://localhost:8080/download/${uploadedPhoto.id}`);
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Failed to upload file.");
        } finally {
            setIsUploading(false);
        }
    };

    const handleDeleteProfilePicture = async () => {
        if (!uploadedImage) return;

        const photoId = uploadedImage.split("/").pop(); // Extract ID from URL

        try {
            const response = await fetch(`http://localhost:8080/photoz/${photoId}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Failed to delete profile picture.");
            }

            setUploadedImage(null);
        } catch (error) {
            console.error("Error deleting file:", error);
            alert("Failed to delete profile picture.");
        }
    };

    return (
        <div className="profile-customization">
            <header className="header">
                <div className="logo">Profile Customizer</div>
                <nav className="navbar">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/profile-history">History</a></li>
                    </ul>
                </nav>
            </header>

            <div className="profile-section">
                <div
                    className="circle"
                    style={{
                        borderColor: circleColor,
                        backgroundImage: uploadedImage ? `url(${uploadedImage})` : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>
                {uploadedImage && (
                    <button
                        className="delete-picture-button"
                        onClick={handleDeleteProfilePicture}
                    >
                        Delete Profile Picture
                    </button>
                )}
                <input
                    className="profile-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />
                <textarea
                    className="profile-status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    placeholder="Add a status..."
                />
                <div className="color-picker-container">
                    <label htmlFor="color-picker">Circle Border Color:</label>
                    <input
                        id="color-picker"
                        type="color"
                        value={circleColor}
                        onChange={handleColorChange}
                        className="color-picker"
                    />
                </div>
                <div className="file-upload">
                    <label htmlFor="file-upload" className="file-upload-label">
                        {isUploading ? "Uploading..." : "Upload a Profile Picture"}
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        onChange={handleFileUpload}
                        className="file-upload-input"
                    />
                </div>
            </div>

            <footer className="footer">
                <p>
                    Contact us:{" "}
                    <a href="mailto:support@profilecustomizer.com">
                        support@profilecustomizer.com
                    </a>
                </p>
                <p>© 2024 Profile Customizer. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ProfileCustomization;
