import React from 'react';
import {useNavigate} from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/profile-customization');
    };

    return (
        <div className="homepage">
            {/* Header with Navbar */}
            <header className="header">
                <div className="logo">Profile Customizer</div>
                <nav className="navbar">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="/profile-customization">Customize</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <main id="home" className="hero">
                <div className="hero-content">
                    <h1>Your Profile, Your Style</h1>
                    <p>Create a personalized profile and customize it with vibrant colors, themes, and more.</p>
                    <div className="cta">
                        <button onClick={handleNavigation}>Get Started</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="https://via.placeholder.com/400x300" alt="Profile Customizer"/>
                </div>
            </main>

            {/* Features Section */}
            <section id="features" className="features">
                <h2>Features</h2>
                <ul>
                    <li>🎨 Customize your profile with vibrant colors.</li>
                    <li>👤 Preview your profile in real-time.</li>
                    <li>🌟 Save and share your unique profile.</li>
                </ul>
            </section>

            {/* Footer */}
            <footer id="contact" className="footer">
                <p>Contact us: <a href="mailto:support@profilecustomizer.com">support@profilecustomizer.com</a></p>
                <p>© 2024 Profile Customizer. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
