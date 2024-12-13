import React, {useEffect, useState} from "react";
import "./ProfileHistory.css";

const ProfileHistory = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/photoz")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch photos.");
                }
                return response.json();
            })
            .then((data) => setPhotos(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="profile-history">
            <header className="header">
                <div className="logo">Profile History</div>
                <nav className="navbar">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/profile-customization">Customize</a></li>
                    </ul>
                </nav>
            </header>
            <h1>Profile History</h1>
            <div className="photo-gallery">
                {photos.map((photo) => (
                    <div key={photo.id} className="photo-card">
                        <div
                            className="photo"
                            style={{
                                backgroundImage: `url(http://localhost:8080/download/${photo.id})`,
                                borderColor: photo.circleColor,
                            }}
                        ></div>
                        <p>Color: {photo.circleColor}</p>
                        <p>File Name: {photo.fileName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileHistory;
