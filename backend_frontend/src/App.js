import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage"; // Importing HomePage
import ProfileCustomization from "./components/ProfileCustomization"; // Importing ProfileCustomization
import ProfileHistory from "./components/ProfileHistory"; // Importing ProfileHistory
import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/profile-customization" element={<ProfileCustomization/>}/>
                    <Route path="/profile-history" element={<ProfileHistory/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
